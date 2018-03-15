import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { element } from 'protractor';

declare function init_plugins();
declare const  gapi: any; // google api sign in

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;
  auth2: any;
  constructor(
    public router: Router,
    public _usuarioServices: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1 ) {
      this.recuerdame = true;
    }
  }

  // funcion para google sign ing
  googleInit() {
    console.log('hola?');
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1063834625481-g3uubrs1sosis1vfk6or8sedkl1u4qio.apps.googleusercontent.com', // el id del proyecto web en google
        cookiepolicy: 'single_host_origin',
        scope:  'profile email' // trae la informacion del usuario google, perfil correo etc
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }
// tslint:disable-next-line:no-shadowed-variable
attachSignin( element ) {
  this.auth2.attachClickHandler(element, {}, (googleUser) => {
  // let profile = googleUser.getBasicProfile();
  let token = googleUser.getAuthResponse().id_token;

  this._usuarioServices.loginGoogle(token)
      .subscribe(resp => this.router.navigate(['dashboard']));
      // .subscribe(resp => window.location.href = '#/dashboard');
  });
}
  ingresar(forma: NgForm) {
    if ( forma.invalid) {
      return;
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioServices.login(usuario, forma.value.recuerdame)
    .subscribe(resp => this.router.navigate(['dashboard']));
     // this.router.navigate([ '/dashboard' ]);

  }
}

