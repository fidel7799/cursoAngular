import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// Es buena practica colocar el implements OnInit para que se sepa que se implementa el ciclo de vida de Angular
// export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setTimeout>; //Si no se importa NodeJS.Timeout

  private destroyRef = inject(DestroyRef);

  // Se deberia usar el constructor para inicializar variables y no para ejecutar funciones
  // No estan disponibles los valores del input
  // constructor() {}

  //Estan disponibles los valores del input
  ngOnInit() {
    console.log('ngOnInit');
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  //   clearTimeout(this.interval);
  // }
}
