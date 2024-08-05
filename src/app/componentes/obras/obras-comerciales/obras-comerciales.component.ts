import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-obras-comerciales',
  standalone: true,
  imports: [],
  templateUrl: './obras-comerciales.component.html',
  styleUrl: './obras-comerciales.component.css'
})
export class ObrasComercialesComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
