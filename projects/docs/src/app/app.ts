import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconicButtonModule } from 'angular-iconic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconicButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('docs');
}
