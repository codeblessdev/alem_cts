import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import throttle from 'lodash-es/throttle';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isNavbarCollapsed = false;
  isCollapsing = false;

  constructor(private router: Router, private renderer: Renderer2, private scrollService: ScrollService) {
    this.onWindowScrollThrottled = throttle(this.onWindowScroll, 100).bind(this);
  }

  

  onWindowScrollThrottled = throttle(() => {
    this.onWindowScroll();
  }, 100);


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const navbar = document.getElementById('navbar');
    console.log(window.scrollY);
    if (window.scrollY > 1) {
      navbar!.classList.add('navbar-scrolled');
    } else {
      navbar!.classList.remove('navbar-scrolled');
    }
  }


  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = false;
  }

  ngOnInit() {
    // this.router.events.subscribe(() => {
    //   this.isNavbarCollapsed = false;
    //   window.scrollTo(0, 0); // Esto asegura que la página siempre comienza en la parte superior
    // });
    // window.addEventListener('scroll', this.onWindowScrollThrottled);
  }

  onScrollToContent(element: string) {
    setTimeout(() => {
      this.scrollService.scrollToElement(element);
      this.closeNavbar;
    }, 300);
  }

  isDropdownVisible = false;

  toggleDropdown(show: boolean) {
    console.log(this.isDropdownVisible);
    
    this.isDropdownVisible = show;
  }

}
