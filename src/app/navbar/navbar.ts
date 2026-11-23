import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly expanded = signal(false);

  protected toggleMenu() {
    this.expanded.update(v => !v);
  }

  protected closeMenu() {
    this.expanded.set(false);
  }
}
