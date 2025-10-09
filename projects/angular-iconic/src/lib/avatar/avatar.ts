import { Component, input } from '@angular/core';

@Component({
  selector: 'iconic-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class IconicAvatar {
  initials = input<string | undefined>(); 
  image = input<string | undefined>(); 
  shape = input<'square' | 'rounded' | 'cicle'>('cicle'); 
}
