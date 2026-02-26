import { Component } from '@angular/core';
import { UserService } from '../Services/user.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  userId: number = 0;
  userName: string = '';
  userCompany: string = '';
  userEmail: string = '';
  userCountry: string = '';

  constructor(private userService: UserService) {

  }


  onAddUser() {
    this.userService.AddNewUser({
      id: this.userId,
      name: this.userName,
      company: this.userCompany,
      contact: this.userEmail,
      country: this.userCountry
    });
  }

}
