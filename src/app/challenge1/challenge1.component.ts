import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { media, stddev } from '../commons/operaciones';

import dataset1JSON from '../../assets/dataset1.json';
import dataset2JSON from '../../assets/dataset2.json';

@Component({
  selector: 'app-challenge1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './challenge1.component.html',
  styleUrl: './challenge1.component.css'
})
export class Challenge1Component {
  result: any;
  datos: any;

  media() {
    let arreglo: number[] = [];

    switch (this.datos) {
      case "1":
        arreglo = dataset1JSON;
        break;
      case "2":
        arreglo = dataset2JSON;
        break;
    }

    const resultado = media(arreglo);
    this.result = resultado;
  }

  desv() {
    let arreglo: number[] = [];
    switch (this.datos) {
      case "1":
        arreglo = dataset1JSON;
        break;
      case "2":
        arreglo = dataset2JSON;
        break;
    }

    const resultado = stddev(arreglo);
    this.result = resultado;
  }

}
