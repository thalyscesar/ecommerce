import { BaseService } from './../../../shared/base.service';
import { Injectable, Injector } from '@angular/core';
import { Pedido } from './pedido.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends BaseService<Pedido> {

  constructor(protected injector: Injector) {
    super(`${environment.baseUrl}/pedido`, injector);
  }
}
