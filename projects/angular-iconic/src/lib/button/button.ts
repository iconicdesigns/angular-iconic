import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'button[iconic-button]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class IconicButton {

 @HostBinding('class')
  get hostClasses() {
    return {
      'iconic-button': true,
      [`iconic-button-${this.size()}`]: true
    };
  }

  size = input<'small' | 'medium' | 'large'>('medium');
  variant = input<'neutral' | 'primary' | 'secondary' | 'teritary'>('neutral');
  apperance = input<'accent' | 'outlined' | 'basic'>('accent');
}
