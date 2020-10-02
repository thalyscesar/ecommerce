import { Cliente } from '../../clientes/models/cliente.model';
import { Entidade } from '../../clientes/models/Entidade.model';
import { Produto } from '../../produtos/recursos/produto.model';

export class PedidoItem  extends Entidade {

  constructor(public id?: number, public quantidade: number = 0, public produto?: Produto) {
    super(id);
  }

   calcularValor(): number {

    return parseFloat(this.produto.valor.toString()) * parseFloat(this.quantidade.toString());
  }

  adicionarUnidade() {
    this.quantidade++;
  }

  atualizarUnidade(quantidade: number) {
    this.quantidade = quantidade;
  }
}
