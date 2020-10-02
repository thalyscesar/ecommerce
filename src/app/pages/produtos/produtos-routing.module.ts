
import { FrmProdutoComponent } from './frm-produto/frm-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

const routes: Routes = [

  { path: '', component: ListaProdutoComponent },
  { path: 'novo', component: FrmProdutoComponent },
   { path: 'atualizar/:id', component: FrmProdutoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
