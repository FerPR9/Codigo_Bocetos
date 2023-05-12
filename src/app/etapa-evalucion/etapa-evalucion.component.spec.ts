import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaEvalucionComponent } from './etapa-evalucion.component';

describe('EtapaEvalucionComponent', () => {
  let component: EtapaEvalucionComponent;
  let fixture: ComponentFixture<EtapaEvalucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtapaEvalucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapaEvalucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
