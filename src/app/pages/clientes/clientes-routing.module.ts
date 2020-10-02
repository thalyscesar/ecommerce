import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { FrmClienteComponent } from './frm-cliente/frm-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaClienteComponent },
  { path: 'novo', component: FrmClienteComponent },
   { path: 'atualizar/:id', component: FrmClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
