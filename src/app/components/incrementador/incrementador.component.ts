import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: number = 100;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log( 'leyenda Constructor ', this.leyenda);
    // console.log( 'progreso Constructor ', this.progreso);
   }

  ngOnInit() {
  }

  onChange( newValue: number ) {

    let elemHTML: any = document.getElementsByName('progreso')[0];
    console.log( 'nuevo Valor ', newValue);
  if ( newValue >= 100) {
    this.progreso = 100;
  } else if ( newValue <= 0 ) {
    this.progreso  = 0;
  } else {
    this.progreso = newValue;
  }
    elemHTML.value = this.progreso;
    this.cambioValor.emit( this.progreso);
  }

  CambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso); // emite un evento a un componente
  }
}
