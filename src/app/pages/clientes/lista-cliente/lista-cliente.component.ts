import { ClienteService } from './../models/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  constructor(protected clienteService: ClienteService, protected router: Router, protected route: ActivatedRoute  ) { }

  colunas: string[] = ['Id', 'Codigo', 'Nome'];
  linhas: string[][] = [];
  idSelecioanado: string;

  ngOnInit() {
    this.preencherListaClientes();
  }

  preencherListaClientes() {
    this.clienteService.getAll(1).subscribe(clientes => {
      clientes.forEach(c => {
        this.linhas.push([ c.id.toString() , c.codigo, c.nome]);
      });
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

    this.router.navigateByUrl(`clientes/atualizar/${ this.idSelecioanado }`);
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

    this.clienteService.delete(this.idSelecioanado).subscribe(c => {
      alert('Exclusão realizada com sucesso');
    });
  }

  novo() {
    this.router.navigateByUrl('clientes/novo');
  }
}
