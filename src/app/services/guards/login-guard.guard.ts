import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService,
              public router: Router) {}
  canActivate() {

    if ( this._usuarioService.estaLogeado()) {
      console.log('Pasa el Guard');
      return true;
    } else {
      this.router.navigate((['/login']));
      console.log('Bloqueado por el Guard');
      return false;
    }
  }
}
