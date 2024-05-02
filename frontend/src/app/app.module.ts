import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ListChefComponent } from './components/chef/list-chef/list-chef.component';
import { AddEditChefComponent } from './components/chef/add-edit-chef/add-edit-chef.component';
import { LoginComponent } from './components/user/login/login.component';
import { SingInComponent } from './components/user/sing-in/sing-in.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListDetalleComponent } from './components/detalleCompra/list-detalle/list-detalle.component';
import { AddEditDetalleComponent } from './components/detalleCompra/add-edit-detalle/add-edit-detalle.component';
import { ListUsuariosComponent } from './components/user/list-usuarios/list-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgressBarComponent,
    ListChefComponent,
    AddEditChefComponent,
    LoginComponent,
    SingInComponent,
    BusquedaPipe,
    DashboardComponent,
    ListDetalleComponent,
    AddEditDetalleComponent,
    ListUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule, // para nuestro login
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
