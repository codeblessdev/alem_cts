import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-obras-particulares',
  standalone: true,
  imports: [],
  templateUrl: './obras-particulares.component.html',
  styleUrl: './obras-particulares.component.css'
})
export class ObrasParticularesComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
