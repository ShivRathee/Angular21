import { CommonModule } from '@angular/common';
import { Component, ViewChild ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '../search/search';
import { Filter } from '../filter/filter';
import { UserService } from '../Services/user.services';
import { AddUser } from '../add-user/add-user';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, Search, Filter, AddUser],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  @ViewChild(Filter, {static:true}) filterComp !: Filter;

  constructor (private userService: UserService) {
  }
 
  members: any[] = [];
  homeSelectedRadioButton: string = 'All';
  filteredMembers: any[] = [];

  ngOnInit() {
  this.members = this.userService.users;
  console.log("Members", this.members);
  this.filteredMembers = this.members;;
  }

  getAllCountriesCount() {
    return this.members.length;
  }

  getIndiansCount() {
    return this.members.filter((indians) => indians.country === 'India').length;
  }
  getOtherCount() {
    return this.members.filter((indians) => indians.country !== 'India').length;
  }

  getSelectedFilterRadioButton(data: string) {
    this.homeSelectedRadioButton = data;
    if (data === 'India') {
       this.filteredMembers = this.members.filter((member) =>
      member.country==='India'
    )} else if(data=== 'Others') {
      this.filteredMembers = this.members.filter((member) =>
      member.country !=='India'
    )}else {
       this.filteredMembers = this.members;
    }
  }

  searchMembersBasedOnValues(text:string) {
    this.filteredMembers = this.members.filter((member) =>
      member.name.toLowerCase().includes(text.toLowerCase()));
  }
}
