import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, MenuComponent, GalleryComponent, ContactComponent, FooterComponent, TestimonialsComponent, DownloadAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('sri-vari-catering');

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
