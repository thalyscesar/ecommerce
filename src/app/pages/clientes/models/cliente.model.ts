import { Entidade } from './Entidade.model';

export class Cliente extends Entidade {

  constructor(public id?: number, public codigo?: string, public nome?: string) {
    super(id);
  }

  static  fromJson(json: any): Cliente {
    return Object.assign(new Cliente(), json);
 }

}
