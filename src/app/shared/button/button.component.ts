import { Component } from '@angular/core';

@Component({
  // Con estos selectors en el DOM no se renderiza "app-button" sino directamente el botón
  // selector: '[appButton]',//Todos los elementos con el atributo appButton
  // selector: 'button[appButton], a[appButton]',//Todos los botones y a con el atributo appButton
  selector: 'button[appButton]', //Todos los botones con el atributo appButton
  // selector: 'button.button//Todos los botones con la clase button'
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
