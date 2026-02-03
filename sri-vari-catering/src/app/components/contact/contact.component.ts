import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name = '';
  phone = '';
  date = '';
  message = '';

  sendWhatsApp() {
    const text = `
      Sri Vari Catering Enquiry
      Name: ${this.name}
      Mobile: ${this.phone}
      Event Date: ${this.date}
      Details: ${this.message}
    `;

    const url =
      'https://wa.me/919524547041?text=' + encodeURIComponent(text);

    window.open(url, '_blank');
  }
}
