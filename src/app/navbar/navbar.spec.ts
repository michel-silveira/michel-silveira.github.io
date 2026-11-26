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
});
