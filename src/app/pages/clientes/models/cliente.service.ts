import { BaseService } from './../../../shared/base.service';
import { Injectable, Injector } from '@angular/core';
import { Cliente } from './cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService<Cliente> {

  constructor(protected injector: Injector) {
    super(`${environment.baseUrl}/cliente`, injector);
  }
}
