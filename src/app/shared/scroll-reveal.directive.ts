import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[scrollReveal]'
})
export class ScrollRevealDirective implements OnInit {
  @HostBinding('class.revealed') isVisible = false;
  @Input() revealDelay = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting  && !this.isVisible) {
            setTimeout(() => {
              this.isVisible = true;
              observer.unobserve(this.el.nativeElement);
            }, this.revealDelay);
          }
        });
      },
      { threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
      }
    );
    observer.observe(this.el.nativeElement);
  }
}
