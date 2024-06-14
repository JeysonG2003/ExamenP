import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string;
  edad: number;
  resultado: string;

  constructor() {}

  checkAge() {
    if (this.edad !== undefined) {
      if (this.edad >= 18) {
        this.resultado = `${this.nombre}, eres mayor de edad.`;
      } else {
        this.resultado = `${this.nombre}, eres menor de edad.`;
      }
    } else {
      this.resultado = 'Por favor, ingresa una edad válida.';
    }
  }
}




