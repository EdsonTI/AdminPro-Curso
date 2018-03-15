import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import {HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import * as swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable()
export class UsuarioService {

  token: string;
  usuario: Usuario;


  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    // console.log('servicio de usuario listo');
    this.cargaStorage();
  }

// funcion para guardar en el local Store
guardarStore(id: string, token: string, usuario: Usuario) {
  localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.usuario = usuario;
      this.token = token;
      console.log('ingresaste wey');
}

  // login servicio con google
  loginGoogle( token: string) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, { token })
    .map((resp: any) => {
      this.guardarStore( resp.id, resp.token, resp.usuario );
    }) ;
  }

  // para el guard
  estaLogeado() {
    return ( this.token.length > 5) ? true : false;
  }
  // Inicializar token y usuario de storage
  cargaStorage() {
    if (localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }
  // servicio de login, realiza la consulta a la base de datos tipo post
  login(usuario: Usuario, recordar: boolean = false) {

    if ( recordar ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .map((resp: any ) => {
    this.guardarStore(resp.id, resp.token, resp.usuario);
    });

  }
  // servicio de logout, realiza la salida de sesión
  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }
// servicio de crear usuario, realiza la creación de un usuario
  crearUsuario( usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario)
    .map( (resp: any) => {
      swal('usuario creado', usuario.email, 'success');
      return resp.usuario;
    });
  }
}
