import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasPublicasComponent } from './obras-publicas.component';

describe('ObrasPublicasComponent', () => {
  let component: ObrasPublicasComponent;
  let fixture: ComponentFixture<ObrasPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasPublicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObrasPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
