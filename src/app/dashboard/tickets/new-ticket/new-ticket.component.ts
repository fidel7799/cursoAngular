import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  //El ElementRef es un servicio que nos permite acceder a los elementos del DOM, es un tipo generico
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>; //El selector (lo que esta dentro del parentesis) puede ser una clase, un componente, un template variable, un id, etc.
  //@ViewChild(ButtonComponent) //Se podría interactuar con el ButtonComponent
  // onSubmit(title: HTMLInputElement) {
  //Es la forma de acceder a los valores de los elementos del DOM
  //console.dir(title);
  //const enteredValue = title.value;
  //console.log(enteredValue);
  //@ViewChildren(ButtonComponent) buttons?: QueryList<ButtonComponent>;//Para seleccionar varios elementos

  // Se usa el required porque sé que siempre va a existir ese elemento
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //SIGNALS -> Se escribe igual que el ViewChild pero con el signo de interrogación

  // onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
  //   console.log('Submit');
  //   form.reset();//resetea el formulario
  // }

  // @ViewChild
  // onSubmit(title: string, ticketText: string) {
  //   console.log('Submit');
  //   this.form?.nativeElement.reset(); //resetea el formulario
  // }

  // Signals
  onSubmit(title: string, ticketText: string) {
    console.log('Submit');
    this.form().nativeElement.reset(); //resetea el formulario
  }
}
