import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calculateSimpson, f1_x, f2x, fx2, simpson } from '../../commons/operaciones';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-challenge5',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './challenge5.component.html',
  styleUrl: './challenge5.component.css'
})
export class Challenge5Component {
  operacion: any = '1';

  x0: any;
  x1: any;
  nSeg: any;
  mError: any;
  dof: any;  

  result: any;

  useSimpson(useDof: boolean = false) {
    let funcion = null;
    
    switch (this.operacion) {
      case '1':
        funcion = fx2;
        break;
      case '2':
        funcion = f2x;
        break;
      case '3':
        funcion = f1_x;
        break;
    }
    
    this.result = calculateSimpson(this.x0, this.x1, this.nSeg, this.mError, funcion, useDof ? this.dof : 0);
  }
}
