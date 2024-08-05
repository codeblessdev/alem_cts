import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // mostrarOtros: boolean = true;
  mostrarTexto: boolean = false;
  mostrarDescripcion: boolean = false;
  descripcion: string = "";
  private router = inject(Router);

  @ViewChild('contenido') contenido!: ElementRef;


  toggleTexto() {
    this.mostrarTexto = !this.mostrarTexto;
    if (this.mostrarTexto) {
      setTimeout(() => {
        this.scrollToContent();
      }, 500);
    }
  }

  scrollToContent() {
    if (this.contenido) {
      this.contenido.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  hoveredImage: number | null = null;

  onMouseEnter(imageNumber: number) {
    this.hoveredImage = imageNumber;

    switch(this.hoveredImage)
    {
      case 1:
        this.descripcion = "Obras Comerciales";
        break;
      case 2:
        this.descripcion = "Obras Industriales";
        break;
      case 3:
        this.descripcion = "Obras Particulares";
        break;
      case 4:
        this.descripcion = "Obras Varias";
        break;
    }

    this.mostrarDescripcion = true;

  }

  onMouseLeave(imageNumber: number) {
    if (this.hoveredImage === imageNumber) {
      this.hoveredImage = null;
    }

    this.mostrarDescripcion = false;
  }
  
  IrAObra(){

    switch(this.hoveredImage)
    {
      case 1:
        this.router.navigateByUrl('/obrascomerciales');
        break;
      case 2:
        this.router.navigateByUrl('/obrasindustriales');
        break;
      case 3:
        this.router.navigateByUrl('/obrasvarias');
        break;
      case 4:
        this.router.navigateByUrl('/obraspublicas');
        break;
    }
  }

}
