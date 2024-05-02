import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes

import { ListChefComponent } from './components/chef/list-chef/list-chef.component';
import { AddEditChefComponent } from './components/chef/add-edit-chef/add-edit-chef.component';
import { LoginComponent } from './components/user/login/login.component';
import { SingInComponent } from './components/user/sing-in/sing-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './utils/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListDetalleComponent } from './components/detalleCompra/list-detalle/list-detalle.component';
import { AddEditDetalleComponent } from './components/detalleCompra/add-edit-detalle/add-edit-detalle.component';
import { ListUsuariosComponent } from './components/user/list-usuarios/list-usuarios.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'singIn', component: SingInComponent},

  { path: '', component: DashboardComponent,canActivate: [AuthGuard], children:[

    { path: 'users', component: ListUsuariosComponent},

    { path: 'chefs', component: ListChefComponent},
    { path: 'chef/add', component: AddEditChefComponent},
    { path: 'chef/edit/:id', component: AddEditChefComponent},

    { path: 'detalleCompras', component: ListDetalleComponent},
    { path: 'detalleCompras/add', component: AddEditDetalleComponent},
    { path: 'detalleCompras/edit/:id', component: AddEditDetalleComponent},
    { path: '**', component: NavbarComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
