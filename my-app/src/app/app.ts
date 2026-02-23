import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, Footer,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

  @ViewChild('dobInput') dateOfBirth !: ElementRef ;
  @ViewChild('ageInput') age !: ElementRef;

  calculateAge() {
    let birthDate = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let todayYear = new Date().getFullYear();
    let age = todayYear - birthDate;
    this.age.nativeElement.value = age;
  }
}
