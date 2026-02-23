import { Directive ,ElementRef, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
      this.renderer.addClass(this.element.nativeElement, 'highlighted');
      this.renderer.setAttribute(this.element.nativeElement, 'title', 'This text is highlighted by Highlight directive');
  }

}
