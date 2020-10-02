import { BaseService } from './../../../shared/base.service';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService<Produto> {

  constructor(protected injector: Injector) {
    super(environment.baseUrl + '/produto', injector);
  }
}
