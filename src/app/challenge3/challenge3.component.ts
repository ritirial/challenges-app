import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { calculateB0, calculateB1, calculateR, calculateRR, calculateYk } from '../commons/operaciones';

import dataset1JSON from '../../assets/dataset_3_1.json';
import dataset2JSON from '../../assets/dataset_3_2.json';
import dataset3JSON from '../../assets/dataset_3_3.json';
import dataset4JSON from '../../assets/dataset_3_4.json';

@Component({
	selector: 'app-challenge3',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './challenge3.component.html',
	styleUrl: './challenge3.component.css'
})
export class Challenge3Component {
	datosX: any;
	datosY: any;
	datosK: any;

	resultB0: any;
	resultB1: any;
	resultYk: any;
	resultR: any;
	resultR2: any;


	regresion() {
		let arregloX: number[] = [];
		let arregloY: number[] = [];

		switch (this.datosX) {
			case "1":
				arregloX = dataset3JSON;
				break;
			case "2":
				arregloX = dataset4JSON;
				break;
		}

		switch (this.datosY) {
			case "1":
				arregloY = dataset1JSON;
				break;
			case "2":
				arregloY = dataset2JSON;
				break;
		}

		this.resultB1 = calculateB1(arregloX, arregloY);
		this.resultB0 = calculateB0(arregloX, arregloY);
		this.resultYk = calculateYk(arregloX, arregloY, Number(this.datosK));
	}

	correlacion() {
		let arregloX: number[] = [];
		let arregloY: number[] = [];

		switch (this.datosX) {
			case "1":
				arregloX = dataset3JSON;
				break;
			case "2":
				arregloX = dataset4JSON;
				break;
		}

		switch (this.datosY) {
			case "1":
				arregloY = dataset1JSON;
				break;
			case "2":
				arregloY = dataset2JSON;
				break;
		}

		this.resultR = calculateR(arregloX, arregloY);
		this.resultR2 = calculateRR(arregloX, arregloY);
	}
}
