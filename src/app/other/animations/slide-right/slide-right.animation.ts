import { trigger, transition, style, animate } from '@angular/animations';

export const slideRightAnimation = trigger('slideRightAnimation', [
  transition(':enter', [
    style({
      display: 'block',
      transform: 'translateX(-100%)'
    }),
    animate('1s ease-out')
  ]),
]);
