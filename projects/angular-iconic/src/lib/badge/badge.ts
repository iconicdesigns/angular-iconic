import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'iconic-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class IconicBadge {
  @HostBinding('class')
  get classes(): string {
    return `iconic-badge-${this.size()}`;
  }

  variant = input<'primary'>('primary');
  size = input<'xs' | 'sm' | 'md' | 'lg'>('xs'); 
}
