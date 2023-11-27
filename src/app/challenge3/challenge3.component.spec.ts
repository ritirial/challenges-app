import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge3Component } from './challenge3.component';

describe('Challenge3Component', () => {
	let component: Challenge3Component;
	let fixture: ComponentFixture<Challenge3Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Challenge3Component]
		})
			.compileComponents();

		fixture = TestBed.createComponent(Challenge3Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	//Integration tests Regression
	it('Should call regresion() method', () => {
		// Arrange
		let result1 = 0;
		let result0 = 0;
		let resultY = 0;

		component.datosX = "1";
		component.datosY = "1";
		component.datosK = 386;

		// Act
		component.regresion();
		result1 = component.resultB1;
		result0 = component.resultB0;
		resultY = component.resultYk;

		// Assert
		expect(result1).toBeCloseTo(1.7279, 4);
		expect(result0).toBeCloseTo(-22.55, 2);
		expect(resultY).toBeCloseTo(644.429, 3);
	});

	it('Should set Datos X <select> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#datosXSelect');

		// Act 
		inputElement.value = '2';
		inputElement.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		// Assert 
		expect(component.datosX).toEqual("2");
	});

	it('Should set Datos Y <select> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#datosYSelect');

		// Act 
		inputElement.value = "2";
		inputElement.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		// Assert 
		expect(component.datosY).toEqual("2");
	});

	it('Should set Valor Xk <input> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#datosK');

		// Act 
		inputElement.value = 100;
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		// Assert 
		expect(component.datosK).toEqual(100);
	});

	it('Should calculate regresion() when I click the Regresión Lineal <button>', () => {
		// Arrange 
		component.datosX = "2";
		component.datosY = "2";
		component.datosK = 386;
		const button = fixture.debugElement.nativeElement.querySelector('#regresionButton');

		// Act
		button.click();

		// Assert
		expect(component.resultB1).toBeCloseTo(0.14016, 5);
		expect(component.resultB0).toBeCloseTo(-4.604, 3);
		expect(component.resultYk).toBeCloseTo(49.4994, 4);
	});

	it('Should render regresion() in result <p>', () => {
		// Arrange
		component.datosX = "1";
		component.datosY = "1";
		component.datosK = 386;

		// Act
		component.regresion();
		fixture.detectChanges();
		const elemento1 = fixture.nativeElement.querySelector('#resultRegresionB1Element');
		const elemento0 = fixture.nativeElement.querySelector('#resultRegresionB0Element');
		const elementoK = fixture.nativeElement.querySelector('#resultRegresionYkElement');

		// Assert
		expect(Number(elemento1.innerText)).toBeCloseTo(1.7279, 4);
		expect(Number(elemento0.innerText)).toBeCloseTo(-22.55, 2);
		expect(Number(elementoK.innerText)).toBeCloseTo(644.429, 3);
	});


	//Integration tests Correlation
	it('Should call correlation() method', () => {
		// Arrange
		let resultR = 0;
		let resultRR = 0;

		component.datosX = "1";
		component.datosY = "1";

		// Act
		component.correlacion();
		resultR = component.resultR;
		resultRR = component.resultR2;

		// Assert
		expect(resultR).toBeCloseTo(0.9545, 4);
		expect(resultRR).toBeCloseTo(0.9111, 4);
	});

	it('Should calculate correlacion() when I click the Correlación <button>', () => {
		// Arrange 
		component.datosX = "2";
		component.datosY = "2";
		const button = fixture.debugElement.nativeElement.querySelector('#correlacionButton');

		// Act
		button.click();

		// Assert
		expect(component.resultR).toBeCloseTo(0.9480, 4);
		expect(component.resultR2).toBeCloseTo(0.8988, 4);
	});

	it('Should render correlacion() in result <p>', () => {
		// Arrange
		component.datosX = "2";
		component.datosY = "2";

		// Act
		component.correlacion();
		fixture.detectChanges();
		const elementoR = fixture.nativeElement.querySelector('#resultCorrelacionRElement');
		const elementoR2 = fixture.nativeElement.querySelector('#resultCorrelacionR2Element');

		// Assert
		expect(Number(elementoR.innerText)).toBeCloseTo(0.9480, 4);
		expect(Number(elementoR2.innerText)).toBeCloseTo(0.8988, 4);
	});
});
