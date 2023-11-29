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
});
