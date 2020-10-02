import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FrmClienteComponent, ListaClienteComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ClientesModule { }
