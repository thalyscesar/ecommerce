import { FrmPedidoComponent } from './frm-pedido/frm-pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';

const routes: Routes = [
  { path: '', component: ListaPedidoComponent },
   { path: 'novo' , component: FrmPedidoComponent },
   {path: 'atualizar/:id', component: FrmPedidoComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
