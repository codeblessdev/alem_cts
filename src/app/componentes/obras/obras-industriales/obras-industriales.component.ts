import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-obras-industriales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obras-industriales.component.html',
  styleUrl: './obras-industriales.component.css'
})
export class ObrasIndustrialesComponent {

  mostrarTexto: boolean = false;

  @ViewChild('contenido2') contenido!: ElementRef;


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

}