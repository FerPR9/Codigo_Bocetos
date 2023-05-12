import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenioComponent } from './desempenio.component';

describe('DesempenioComponent', () => {
  let component: DesempenioComponent;
  let fixture: ComponentFixture<DesempenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesempenioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesempenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
