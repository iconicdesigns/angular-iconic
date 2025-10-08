import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconicAvatarModule, IconicButtonModule, IconicTagModule } from 'angular-iconic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconicButtonModule, IconicAvatarModule, IconicTagModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('docs');
}
