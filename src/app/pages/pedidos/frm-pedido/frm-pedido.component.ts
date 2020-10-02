import { FreteService } from './../recursos/frete.service';
import { Validators } from '@angular/forms';
import { PedidoService } from './../recursos/pedido.service';
import { ProdutoService } from './../../produtos/recursos/produto.service';
import { Component, Injector, OnInit } from '@angular/core';
import { FrmBase } from '../../clientes/models/frm-base.component';
import { Pedido } from '../recursos/pedido.model';
import { ClienteService } from '../../clientes/models/cliente.service';
import { PedidoItem } from '../recursos/pedidoitem.model';
import { Cliente } from '../../clientes/models/cliente.model';

@Component({
  selector: 'app-frm-pedido',
  templateUrl: './frm-pedido.component.html',
  styleUrls: ['./frm-pedido.component.css']
})
export class FrmPedidoComponent extends FrmBase<Pedido> {

  constructor(protected injector: Injector , protected clienteService: ClienteService ,
              protected produtoService: ProdutoService ,
              protected pedidoService: PedidoService,
              protected freteService: FreteService) {

      super(injector, pedidoService);

      this.clienteService.getAll().subscribe(clientes =>  this.clientes = clientes);
      this.produtoService.getAll().subscribe(produtos =>  this.produtos = produtos);
      this.modelBase = new Pedido();
  }

  clientes: any[];
  produtos: any[];
  pedido: Pedido = new Pedido();
  protected construaModelForm() {
    this.modelForm = this.formBuilder.group({
      id: [0],
      cliente: [null, Validators.required],
      produto: [null]
    });
  }

  protected cancelar() {
    this.router.navigateByUrl('pedidos');
  }

  adicionarItemPedido() {
    const { id, produto } = this.modelForm.value;

    this.produtoService.getById(produto).subscribe(p => {

     if (this.modelBase.itemJaAdicionado(p)) {
        const pedidoItem =  this.modelBase.obterItemPorProduto(p);
        pedidoItem.adicionarUnidade();

      } else {

        const pedidoItem = new PedidoItem(0, 1, p);
        p.imagem = '../../../../assets/img/opalamini.jpg';
        this.modelBase.AdicionarItemPedido(pedidoItem);
      }

     this.calcularValorDoFrete();

    });
  }

  limparPedido() {
    this.modelBase.limparPedido();
    this.modelForm.reset();
  }

  adicionarQuantidade(item, event) {
    // tslint:disable-next-line: radix
    item.quantidade = parseInt(event.target.value || '0');
    this.calcularValorDoFrete();
  }

  public calcularValor(item: any): number {
   const itemPedido = Object.assign(new PedidoItem(), item);
   return itemPedido.calcularValor();
  }

  public calcularValorDoFrete(): void {

    this.freteService.calcularfrete(this.modelBase.calcularQuantidadeDeItem()).subscribe(valor => {
        this.modelBase.valorFrete = valor;
    });
  }

  limparCarrinho() {
    this.modelBase.limparPedido();
    this.modelForm.reset();
  }

  getObjeto(): Pedido {
    const { id, cliente } = this.modelForm.value;
    this.modelBase.id = id;
    // tslint:disable-next-line: radix
    this.modelBase.cliente = new Cliente(parseInt(cliente));
    return this.modelBase;
  }

  protected carregueModelCustomEmEdicao(): void {


  }

}
