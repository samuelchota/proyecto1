import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Chef } from 'src/app/interfaces/chef';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-list-chef',
  templateUrl: './list-chef.component.html',
  styleUrls: ['./list-chef.component.css']
})
export class ListChefComponent implements OnInit{
  listChefs: Chef[] = []
  loading: boolean = false;

  constructor(private _chefService: ChefService, private toastr: ToastrService) { }

  buscar = '';
  pageActual: number=1;

  ngOnInit(): void {
    this.getListChefs();
  }

  getListChefs() {
    this.loading = true;

    this._chefService.getListChefs().subscribe((data: Chef[]) => {
      this.listChefs = data;
      this.loading = false;
    })
  }

  deleteChef(id: number) {
    this.loading = true;
    this._chefService.deleteChef(id).subscribe(() => {
      this.getListChefs();
      this.toastr.warning('El docente fue eliminado con exito', 'Docente eliminado');
    })
  }


}
