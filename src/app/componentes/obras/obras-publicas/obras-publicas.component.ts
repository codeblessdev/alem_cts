import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-obras-publicas',
  standalone: true,
  imports: [],
  templateUrl: './obras-publicas.component.html',
  styleUrl: './obras-publicas.component.css'
})
export class ObrasPublicasComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
