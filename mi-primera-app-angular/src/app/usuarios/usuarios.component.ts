import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario = ['luzdeleon', 'ruggles123','candy8'];
  constructor() { }

  ngOnInit(): void {
  }

}
