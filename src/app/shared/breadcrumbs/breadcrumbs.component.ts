import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser'; // importar metodos para modificar meta

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';
  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta ) {

    this.getDataRoute().subscribe( data => {
    console.log( data);
    this.label = data.titulo;
    title.setTitle(this.label);
    let metatag: MetaDefinition = {
      name: 'descripcion',
      content: this.label };
    this.meta.updateTag(metatag);

    // agregar mas metatags
    this.meta.addTags([
      { 'http-Equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { name: 'twiter:card', content: 'Edson Linares'},
      { name: 'twiter:site', content: '@seranil'},
      { name: 'descripcion', content: 'contenido de de blabla'},
    ]);
    // aqui termina este arreglo para agregar contenido al metatag
    }
  );

   }


   getDataRoute() {
     return this.router.events
     .filter(evento => evento instanceof ActivationEnd)
     .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
     .map( (evento: ActivationEnd ) => evento.snapshot.data);
   }

  ngOnInit() {
  }

}
