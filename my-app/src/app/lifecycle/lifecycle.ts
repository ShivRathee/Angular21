import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked ,AfterViewInit {

  @Input() value = 'Lifecycle component';

  constructor() {
    // console.log('Constructor called');

    // console.log('Value in constructor: ', this.value);
  }

  ngOnInit() {
    // console.log('ngOnInit called');

    // console.log('Value in ngOnInit: ', this.value);
  }

  ngOnChanges() {
    // console.log('ngOnChanges called');

  }

  ngDoCheck() {
    // console.log('ngDoCheck called');

  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called');
  }
  
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy called');
  }

}
