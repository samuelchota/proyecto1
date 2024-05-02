import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DetalleCompras } from 'src/app/interfaces/detalleCompras';
import { DetalleComprasService } from 'src/app/services/detalle-compras.service';

@Component({
  selector: 'app-list-detalle',
  templateUrl: './list-detalle.component.html',
  styleUrls: ['./list-detalle.component.css']
})
export class ListDetalleComponent implements OnInit {

  listDetalleCompras: DetalleCompras[] = []
  loading: boolean = false;

  constructor(private _detalleComprasService: DetalleComprasService, private toastr: ToastrService) { }

  buscar = '';
  pageActual: number=1;

  ngOnInit(): void {
    this.getListDetalleCompras();
  }

  getListDetalleCompras() {
    this.loading = true;

    this._detalleComprasService.getListDetalleCompras().subscribe((data: DetalleCompras[]) => {
      this.listDetalleCompras = data;
      this.loading = false;
    })
  }

  deleteDetalleCompra(id: number) {
    this.loading = true;
    this._detalleComprasService.deleteDetalleCompra(id).subscribe(() => {
      this.getListDetalleCompras();
      this.toastr.warning('El registro fue eliminado con exito', 'Registro eliminado');
    })
  }

}
