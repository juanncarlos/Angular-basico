import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  exs: string[] = ['lesli', 'pamela', 'jenni', 'jhosi'];
  exBorrado: string = '';

  eliminarArray() {
    this.exBorrado = this.exs.shift() || '';
  }

}
