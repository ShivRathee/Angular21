import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appSetBackground]',
})
export class SetBackgroundDirective implements OnInit {
    constructor(private element:ElementRef){
        this.element=element;
    }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'lightblue';
    }
}
