import { Entidade } from '../../clientes/models/Entidade.model';

export class Produto extends Entidade {
  
  constructor(public id?: number, public codigo?: string, public nome?: string, public valor?: number, public imagem?: string) {
    super(id);
  }

}
