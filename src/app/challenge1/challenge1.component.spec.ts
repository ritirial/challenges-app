import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge1Component } from './challenge1.component';


describe('Challenge1Component', () => {

  let component: Challenge1Component;
  let fixture: ComponentFixture<Challenge1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Challenge1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Challenge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Integration tests Media
  it('Should call media() method', () => {
    // Arrange
    let result = 0;
    component.datos = "2";

    // Act
    component.media();
    result = component.result;

    // Assert
    expect(result).toBeCloseTo(550.6, 1);
  });

  it('Should set <select> model through ngModel', async () => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('#datosSelect');

    // Act 
    inputElement.value = '1';
    inputElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    // Assert 
    expect(component.datos).toEqual("1");
  });

  it('Should calculate media() when I click the Media <button>', () => {
    // Arrange 
    component.datos = "1";
    const button = fixture.debugElement.nativeElement.querySelector('#mediaButton');
    
    // Act
    button.click();

    // Assert
    expect(component.result).toBeCloseTo(60.32, 2);
  });

  it('Should render media() in result <p>', () => {
    // Arrange
    component.datos = "1";

    // Act
    component.media();
    fixture.detectChanges();
    const elemento = fixture.nativeElement.querySelector('#resultElement');

    // Assert
    expect(elemento.innerText).toContain('60.32');
  });


  //Integration tests Desviacion Standar
  it('Should call desv() method', () => {
    // Arrange
    let result = 0;
    component.datos = "2";

    // Act
    component.desv();
    result = component.result;

    // Assert
    expect(result).toBeCloseTo(572.03, 2);
  });

  it('Should calculate desv() when I click the "Desviación Estandar" <button>', () => {
    // Arrange 
    component.datos = "1";
    const button = fixture.debugElement.nativeElement.querySelector('#desvButton');
    
    // Act
    button.click();

    // Assert
    expect(component.result).toBeCloseTo(62.26, 2);
  });

  it('Should render desv() in result <p>', () => {
    // Arrange
    component.datos = "1";

    // Act
    component.desv();
    fixture.detectChanges();
    const elemento = fixture.nativeElement.querySelector('#resultElement');

    // Assert
    expect(Number(elemento.innerText)).toBeCloseTo(62.26, 2);
  });
});
