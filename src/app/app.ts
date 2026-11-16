import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wallpaper } from './wallpaper/wallpaper';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [RouterOutlet, Wallpaper, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('michel-silveira');
}
