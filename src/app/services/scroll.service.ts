import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToElement(elementId: string) {
    if(elementId != 'contacto'){
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    else{
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }

}
