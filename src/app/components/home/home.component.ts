import { Component } from '@angular/core';
import {
  trigger,
  query,
  style,
  transition,
  animate,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('staggerFadeInUp', [
      transition(':enter', [
        query('.fade-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  go(selector: string) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
