import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly expanded = signal(false);

  toggleMenu() {
    this.expanded.update(v => !v);
  }

  closeMenu() {
    this.expanded.set(false);
  }
}
