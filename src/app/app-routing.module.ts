import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: './pages/clientes/clientes.module#ClientesModule'

  },
  {
    path: 'produtos',
    loadChildren: './pages/produtos/produtos.module#ProdutosModule'
  },

  {
    path: 'pedidos',
    loadChildren: './pages/pedidos/pedidos.module#PedidosModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
