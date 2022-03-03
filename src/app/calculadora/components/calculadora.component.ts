import { Component, OnInit } from '@angular/core';

//@component gera uma tag html, nomeada pelo selector
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

//OnInit: faz parte do ciclo de vida do angular, é chamado logo quando o objeto é inicializado
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
