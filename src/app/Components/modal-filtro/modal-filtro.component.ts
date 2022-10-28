import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-filtro',
  templateUrl: './modal-filtro.component.html',
  styleUrls: ['./modal-filtro.component.css']
})
export class ModalFiltroComponent implements OnInit {

  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
