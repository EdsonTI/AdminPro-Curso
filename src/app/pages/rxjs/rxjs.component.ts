import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {

   this.subscription = this.regresaObservable().subscribe(
      valor => console.log('valor en Obs ', valor),
      error => console.error('error del observer ', error),
      () => console.log('completado')
    );
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('saliendo de la web ', RxjsComponent.name);
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {

      let contador = -1;
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        };
        observer.next( salida );
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2 ) {

        //   observer.error('Aiiiuuuudaa!!!');
        // }
      }, 500);
    }).retry(2)
    .map( (resp: any) => resp.valor)
    .filter( valor => {
      if ( ( valor % 2 ) === 1) {
        return true;
      } else {
        return false;
      }
    }
    );
  }

}
