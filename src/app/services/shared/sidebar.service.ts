import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {titulo: 'principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'ProgressBar', url: '/progress' },
      { titulo: 'Gráficas', url: '/graficas1' },
      { titulo: 'Promesas', url: '/promesas' },
      { titulo: 'RXJS', url: '/rxjs' }
    ]
  }
  ];
  constructor() { }

}
