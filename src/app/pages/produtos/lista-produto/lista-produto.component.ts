import { ProdutoService } from './../recursos/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(protected produtoService: ProdutoService , protected router: Router, protected route: ActivatedRoute  ) { }

  colunas: string[] = ['Id', 'Codigo', 'Nome', 'Valor'];
  linhas: string[][] = [];
  idSelecioanado: string;

  ngOnInit() {
    this.preencherListaProdutos();
  }

  preencherListaProdutos() {
    this.produtoService.getAll(1).subscribe(produtos => {
      produtos.forEach(c => this.linhas.push([ c.id.toString() , c.codigo, c.nome, c.valor.toFixed(2)]));
    });
  }

  aoSelecionarId(value) {
    this.idSelecioanado = value;
  }

  atualizar(event) {

    if (!this.idSelecioanado || this.idSelecioanado === '') {

      alert("Selecione um item da lista");
      return;
    }
    this.router.navigateByUrl(`produtos/atualizar/${ this.idSelecioanado }`);
  }

  excluir(event) {

    if (!this.idSelecioanado || this.idSelecioanado === '') {
      alert("Selecione um item da lista");
      return;

    }

    const ehPraExcluir = confirm('Deseja realmente excluir este item?');

    if (ehPraExcluir) {
      const index = this.linhas.findIndex(l => l[0] === this.idSelecioanado);
      this.linhas.splice(index, 1);
    }

    this.produtoService.delete(this.idSelecioanado).subscribe(p => {
      alert('Exclusão realizada com sucesso');
    });

  }

  novo() {  this.router.navigateByUrl('produtos/novo'); }

}
