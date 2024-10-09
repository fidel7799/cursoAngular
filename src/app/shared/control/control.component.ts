import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // El encapsulamiento tiene que ver con los estilos, por ejemplo el input y el textarea que estan en el css de este componente
  // encapsulation: ViewEncapsulation.Emulated //Es el valor por defecto
  // encapsulation: ViewEncapsulation.ShadowDom //Usa el shadow dom del navegador
  encapsulation: ViewEncapsulation.None, //No encapsula los estilos, por lo cual se vuelven globales|Desactiva el host en el css
  // Añade elementos al host, como clases o atributos y es la versión recomendada por Angular
  host: {
    class: 'control',
    '(click)': 'onClick()', //Apunta a una funcion del componente (no la del @HostListener)
  },
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';// Se puede usar en lugar de host pero está deprecated
  //@HostListener('click') onClick() {
  //   console.log('Click');
  // }//Es más recomendable usar el host
  label = input.required<string>();
  private el = inject(ElementRef); //Te dara acceso al elemento host del DOM | Basicamente te da acceso al nucleo pero no es recomendable usarlo, mejor es cambiar los datos o elementos del DOM con Angular

  //El viewchild solo permite acceder a los elementos del DOM, pero no a los placeholders como es este caso
  //Para ello se usa contentChild
  //Se usa el Child y no el children porque en cada instancia del controlcomponent solo hay 1
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );
  onClick() {
    console.log('Click');
    console.log(this.el);
    console.log(this.control());
  }
}
