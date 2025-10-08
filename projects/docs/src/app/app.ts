import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconicAvatarModule, IconicButtonModule, IconicCardModule, IconicTagModule } from 'angular-iconic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconicButtonModule, IconicAvatarModule, IconicTagModule, IconicCardModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('docs');
}
