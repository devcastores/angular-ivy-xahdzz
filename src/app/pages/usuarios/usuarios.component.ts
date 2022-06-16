import { Component, OnInit } from '@angular/core';
import { ReqResResponse } from 'src/app/models/reqres-response';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.cargarUsuarios()
      .subscribe( (resp : ReqResResponse) =>{
      console.log(resp);
      });
  }

}
