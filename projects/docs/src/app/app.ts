import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  IconicAvatarModule, 
  IconicButtonGroupModule, 
  IconicButtonModule, 
  IconicCardModule,
  IconicAvatarGroupModule,
  IconicBadgeModule
} from 'angular-iconic';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    IconicButtonModule, 
    IconicAvatarModule, 
    IconicCardModule, 
    IconicButtonGroupModule, 
    IconicAvatarGroupModule,
    IconicBadgeModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('docs');
}
