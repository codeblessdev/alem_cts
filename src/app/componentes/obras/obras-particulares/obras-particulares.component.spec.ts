import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasParticularesComponent } from './obras-particulares.component';

describe('ObrasParticularesComponent', () => {
  let component: ObrasParticularesComponent;
  let fixture: ComponentFixture<ObrasParticularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasParticularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObrasParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
