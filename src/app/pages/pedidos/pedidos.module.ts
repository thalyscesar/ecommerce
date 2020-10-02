import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { FrmPedidoComponent } from './frm-pedido/frm-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaPedidoComponent, FrmPedidoComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidosModule { }
