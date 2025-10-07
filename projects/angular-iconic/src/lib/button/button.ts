import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'button[iconic-button]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    'class': 'iconic-button'
  },
})
export class IconicButton {}
