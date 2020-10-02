import { Cliente } from '../../clientes/models/cliente.model';
import { Entidade } from '../../clientes/models/Entidade.model';
import { Produto } from '../../produtos/recursos/produto.model';
import { PedidoItem } from './pedidoitem.model';

export class Pedido extends Entidade {

  constructor(public id?: number, public cliente?: Cliente, public itens?: PedidoItem[], public valorFrete?: number) {
    super(id);
    // tslint:disable-next-line: new-parens
    this.itens = [];
  }

  public CalcularValorTotalItens(): number {

    let valorTotal = 0;
    this.itens.forEach(i => {
      valorTotal += i.calcularValor();
    });

    return valorTotal;
  }

  public CalcularValorTotalAcrecidoDoFrete(){
    return this.CalcularValorTotalItens() + this.valorFrete;
  }

  public AdicionarItemPedido(pedidoItem: PedidoItem) {

    this.itens.push(pedidoItem);
  }

  excluirItemPedido(pedidoItem: PedidoItem) {
    const index = this.itens.findIndex(p => p.produto.codigo === pedidoItem.produto.codigo);
    this.itens.splice(index, 1);
   }

  itemJaAdicionado(produto: Produto): boolean {

    if (!this.itens || this.itens.length === 0 ) { return false; }

    const itemAdicionado = this.itens.filter(i => i.produto.codigo === produto.codigo );
    return itemAdicionado.length > 0;
  }

  obterItemPorProduto(produto: Produto): PedidoItem {

    if (!this.itens || this.itens.length === 0 ) { return null; }
    const itemAdicionado  = this.itens.filter(i => i.produto.codigo === produto.codigo );
    if (itemAdicionado.length > 0){
      return itemAdicionado[0];
    }
    return null;
  }


  atualizarUnidade(pedidoItem: PedidoItem, quantidade: number) {
    pedidoItem.quantidade++;
  }

  limparPedido() {
    this.itens = [];
  }

 public calcularQuantidadeDeItem(): number {
     let quantidade = 0;
     this.itens.forEach(it => {
       quantidade += it.quantidade;
     });

     return quantidade;
  }



}
