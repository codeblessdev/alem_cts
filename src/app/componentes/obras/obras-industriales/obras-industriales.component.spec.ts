import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasIndustrialesComponent } from './obras-industriales.component';

describe('ObrasIndustrialesComponent', () => {
  let component: ObrasIndustrialesComponent;
  let fixture: ComponentFixture<ObrasIndustrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasIndustrialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObrasIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
