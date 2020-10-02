import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { FrmProdutoComponent } from './frm-produto/frm-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [FrmProdutoComponent, ListaProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule
    // IMaskModule
  ],
  bootstrap: [FrmProdutoComponent]
})
export class ProdutosModule { }
