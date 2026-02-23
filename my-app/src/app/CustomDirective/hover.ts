import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class Hover {

  constructor(private element: ElementRef, private rendrer: Renderer2) { }

  @HostListener('mouseenter') onMouseOver() {
    this.rendrer.setStyle(this.element.nativeElement, 'margin', '50px 50px');
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '20px 10px');
    this.rendrer.setStyle(this.element.nativeElement, 'transition', 'all 0.3s ease');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rendrer.setStyle(this.element.nativeElement, 'margin', '0px 0px');
    this.rendrer.setStyle(this.element.nativeElement, 'padding', '10px 5px');
    this.rendrer.setStyle(this.element.nativeElement, 'transition', 'all 0.3s ease');
  }

}
