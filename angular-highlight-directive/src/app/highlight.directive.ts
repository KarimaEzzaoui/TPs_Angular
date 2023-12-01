// highlight.directive.ts

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() set appHighlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
