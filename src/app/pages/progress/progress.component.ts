import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 10;
  progreso2: number = 90;
  constructor() { }

  ngOnInit() {
  }

}

