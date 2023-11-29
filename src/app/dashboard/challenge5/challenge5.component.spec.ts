import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge5Component } from './challenge5.component';

describe('Challenge5Component', () => {
  let component: Challenge5Component;
  let fixture: ComponentFixture<Challenge5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Challenge5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Challenge5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Integration tests Simpson
	it('Should call useSimpson() method', () => {
		// Arrange
		let result = 0;

		component.operacion = "1";
		component.x0 = 0;
		component.x1 = 1;
		component.nSeg = 4;
		component.mError = 0.0001;

		// Act
		component.useSimpson();
		result = component.result;
		
		// Assert
		expect(result).toBeCloseTo(0.3333, 4);
	});

	it('Should set Funcion f(x) <select> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#funcionSelect');

		// Act 
		inputElement.value = '2';
		inputElement.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		// Assert 
		expect(component.operacion).toEqual("2");
	});

	it('Should set Valor x0 <input> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#x0');

		// Act 
		inputElement.value = 1;
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		// Assert 
		expect(component.x0).toEqual(1);
	});

	it('Should set Valor x1 <input> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#x1');

		// Act 
		inputElement.value = 4;
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		// Assert 
		expect(component.x1).toEqual(4);
	});
  
	it('Should set No. de segmentos <input> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#nSeg');

		// Act 
		inputElement.value = 6;
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		// Assert 
		expect(component.nSeg).toEqual(6);
	});
  
	it('Should set Margen de error <input> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#mError');

		// Act 
		inputElement.value = 0.001;
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		// Assert 
		expect(component.mError).toEqual(0.001);
	});

	it('Should calculate simpson() when I click the Simpson <button>', () => {
		// Arrange 
    component.operacion = "2";
		component.x0 = 0;
		component.x1 = 4;
		component.nSeg = 4;
		component.mError = 0.0001;
		const button = fixture.debugElement.nativeElement.querySelector('#simpsonButton');

		// Act
		button.click();

		// Assert
		expect(component.result).toBeCloseTo(16.0, 1);
	});

	it('Should render simpson() in result <p>', () => {
		// Arrange
    component.operacion = "3";
		component.x0 = 1;
		component.x1 = 4;
		component.nSeg = 6;
		component.mError = 0.001;

		// Act
		component.useSimpson();
		fixture.detectChanges();
		const elemento = fixture.nativeElement.querySelector('#resultElement');

		// Assert
		expect(Number(elemento.innerText)).toBeCloseTo(1.386, 3);
	});


	//Integration tests FuncionT
	it('Should call t() method', () => {
		// Arrange
		let result = 0;

		component.x0 = 0;
		component.x1 = 1.1;
		component.nSeg = 4;
		component.mError = 0.0001;
		component.dof = 9;

		// Act
		component.useSimpson(true);
		result = component.result;

		// Assert
		expect(result).toBeCloseTo(0.35006, 5);
	});

  it('Should set Grados de libertad <input> model through ngModel', async () => {
		// Arrange 
		await fixture.whenStable();
		fixture.detectChanges();
		const inputElement = fixture.nativeElement.querySelector('#dof');

		// Act 
		inputElement.value = 9;
		inputElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		// Assert 
		expect(component.dof).toEqual(9);
	});

	it('Should calculate t() when I click the Función T <button>', () => {
		// Arrange 
		component.x0 = 0;
		component.x1 = 1.1812;
		component.nSeg = 4;
		component.mError = 0.0001;
		component.dof = 10;
		const button = fixture.debugElement.nativeElement.querySelector('#tButton');

		// Act
		button.click();

		// Assert
		expect(component.result).toBeCloseTo(0.36757, 4);
	});

	it('Should render t() in result <p>', () => {
		// Arrange
		component.x0 = 0;
		component.x1 = 2.750;
		component.nSeg = 4;
		component.mError = 0.0001;
		component.dof = 30;

		// Act
		component.useSimpson(true);
		fixture.detectChanges();
		const elemento = fixture.nativeElement.querySelector('#resultElement');

		// Assert
		expect(Number(elemento.innerText)).toBeCloseTo(0.49500, 5);
	});
});
