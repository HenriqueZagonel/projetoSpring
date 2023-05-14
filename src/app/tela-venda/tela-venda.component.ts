import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-venda',
  templateUrl: './tela-venda.component.html',
  styleUrls: ['./tela-venda.component.css']
})
export class TelaVendaComponent {

  produtos:{codigo:number, descricao:string, estoque:number}[]=[
    {
      codigo: 1,
      descricao: "Produto A",
      estoque: 10
    },
    {
      codigo: 2,
      descricao: "Produto B",
      estoque: 5
    },
    {
      codigo: 3,
      descricao: "Produto C",
      estoque: 8
    }
 ]
 
}
