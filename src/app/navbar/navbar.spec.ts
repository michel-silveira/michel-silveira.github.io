import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let fixture: ComponentFixture<Navbar>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    element = fixture.nativeElement;

    await fixture.whenStable();
  });

  it('opens and closes the menu when the menu button is clicked', async () => {
    const button = element.querySelector<HTMLButtonElement>('.menu-toggle')!;
    const nav = element.querySelector('.nav')!;

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.textContent?.trim()).toBe('Menu');
    expect(nav.classList.contains('open')).toBe(false);

    button.click();
    await fixture.whenStable();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.textContent?.trim()).toBe('Close');
    expect(nav.classList.contains('open')).toBe(true);

    button.click();
    await fixture.whenStable();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.textContent?.trim()).toBe('Menu');
    expect(nav.classList.contains('open')).toBe(false);
  });

  it('closes the menu when a link is clicked', async () => {
    const button = element.querySelector<HTMLButtonElement>('.menu-toggle')!;
    const nav = element.querySelector('.nav')!;
    const links = element.querySelectorAll<HTMLAnchorElement>('a');

    expect(links.length).toBe(5);

    for (const link of links) {
      button.click();
      await fixture.whenStable();

      expect(nav.classList.contains('open'), `before clicking "${link.textContent.trim()}"`).toBe(
        true,
      );

      link.click();
      await fixture.whenStable();

      expect(nav.classList.contains('open'), `after clicking "${link.textContent.trim()}"`).toBe(
        false,
      );
    }
  });

  it('closes the menu when Escape is pressed', async () => {
    const button = element.querySelector<HTMLButtonElement>('.menu-toggle')!;
    const nav = element.querySelector('.nav')!;
    const list = element.querySelector('.nav-links')!;

    button.click();
    await fixture.whenStable();

    expect(nav.classList.contains('open')).toBe(true);

    list.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await fixture.whenStable();

    expect(nav.classList.contains('open')).toBe(false);
  });
});
