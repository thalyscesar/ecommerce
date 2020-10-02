import { Component, Injector, NgModule } from '@angular/core';
import { Validators } from '@angular/forms';
import { FrmBase } from '../../clientes/models/frm-base.component';
import { Produto } from '../recursos/produto.model';
import { ProdutoService } from '../recursos/produto.service';

@Component({
  selector: 'app-frm-produto',
  templateUrl: './frm-produto.component.html',
  styleUrls: ['./frm-produto.component.css']
})
export class FrmProdutoComponent extends FrmBase<Produto> {
  constructor(injector: Injector, protected produtoService: ProdutoService) {
    super(injector, produtoService);
  }

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: false,
    radix: ','
  };

  protected construaModelForm() {

    this.modelForm = this.formBuilder.group({
      id: [0],
      codigo: [null, [Validators.required, Validators.maxLength(60)]],
      nome: [null, [Validators.required, Validators.maxLength(60)]],
      valor: [null, Validators.required]
    });

  }

  protected cancelar() {
    this.router.navigateByUrl('produtos');
  }

  getObjeto(): Produto {
    const model: Produto = this.modelForm.value;
    // tslint:disable-next-line: radix
    model.valor = parseFloat(this.modelForm.value.valor.replace(',', '.'));
    return model;
  }

  protected carregueModelCustomEmEdicao(): void {
    this.modelForm.patchValue({
       id: this.modelBase.id,
       codigo: this.modelBase.codigo,
       nome: this.modelBase.nome,
       valor: this.modelBase.valor.toString().replace('.', ',')
      });
  }



}
