import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  protected http: HttpClient

  constructor(injector: Injector) {
   this.http = injector.get(HttpClient);
  }

  calcularfrete(quantidade: number): Observable<any> {
  return this.http.get(`${environment.baseUrlFrete}/frete/calcularfrete?quantidade=${quantidade}`);

  }

}
