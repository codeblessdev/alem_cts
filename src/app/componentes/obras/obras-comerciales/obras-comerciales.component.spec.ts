import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasComercialesComponent } from './obras-comerciales.component';

describe('ObrasComercialesComponent', () => {
  let component: ObrasComercialesComponent;
  let fixture: ComponentFixture<ObrasComercialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasComercialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObrasComercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
