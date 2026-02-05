import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
   const counters = document.querySelectorAll('.counter-box');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const box = entry.target as HTMLElement;
          box.classList.add('show');

          const counter = box.querySelector('.count') as HTMLElement;
          const target = +counter.getAttribute('data-target')!;
          let current = 0;
          const speed = target / 80;

          const update = () => {
            current += speed;
            if (current < target) {
              counter.textContent = Math.ceil(current).toString();
              requestAnimationFrame(update);
            } else {
              counter.textContent = target + "+";
            }
          };

          update();
          observer.unobserve(box);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(box => observer.observe(box));
  }
}
