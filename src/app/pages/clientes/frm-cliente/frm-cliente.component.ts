import { ClienteService } from './../models/cliente.service';
import { Component, OnInit, Injector } from '@angular/core';
import { FrmBase } from '../models/frm-base.component';
import { Cliente } from '../models/cliente.model';
import { Validators } from '@angular/forms';
import { Entidade } from '../models/Entidade.model';

@Component({
  selector: 'app-frm-cliente',
  templateUrl: './frm-cliente.component.html',
  styleUrls: ['./frm-cliente.component.css']
})
export class FrmClienteComponent extends FrmBase<Cliente> {


  constructor(protected injector: Injector, protected clienteService: ClienteService ) {
    super(injector, clienteService);
  }

  protected construaModelForm(): void {

    this.modelForm = this.formBuilder.group({
      id: [0],
      nome: [null, [Validators.required, Validators.maxLength(60)]],
      codigo: [null, [Validators.required, Validators.maxLength(40) ], ]
    });
  }

  protected carregueModelCustomEmEdicao(): void {

    this.modelForm.patchValue({
      id: this.modelBase.id,
      nome: this.modelBase.nome,
      codigo: this.modelBase.codigo
    });

  }

  protected cancelar() {
    this.router.navigateByUrl('clientes');
  }
}

