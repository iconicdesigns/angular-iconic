import { Component, input } from '@angular/core';

@Component({
  selector: 'iconic-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class IconicTag {
  size = input<'sm' | 'md' | 'lg'>('sm');
}
