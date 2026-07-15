import { Component } from '@angular/core';
import { EXTERNAL_LINKS } from '../../config/external-links';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuOpen = false;
  signInUrl = EXTERNAL_LINKS.portalCustomerLogin;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
