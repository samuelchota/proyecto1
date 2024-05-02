import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  listUsers: Users[] = []
  loading: boolean = false;

  constructor(private _usersService: UsersService, private toastr: ToastrService) { }

  buscar = '';
  pageActual: number=1;

  ngOnInit(): void {
    this.getListUsers();
  }

  getListUsers() {
    this.loading = true;

    this._usersService.getListUsers().subscribe((data: Users[]) => {
      this.listUsers = data;
      this.loading = false;
    })
  }

  deleteUser(id: number) {
    this.loading = true;
    this._usersService.deleteUser(id).subscribe(() => {
      this.getListUsers();
      this.toastr.warning('El registro fue eliminado con exito', 'Registro eliminado');
    })
  }

}
