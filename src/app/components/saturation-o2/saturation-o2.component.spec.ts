import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturationO2Component } from './saturation-o2.component';

describe('SaturationO2Component', () => {
  let component: SaturationO2Component;
  let fixture: ComponentFixture<SaturationO2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaturationO2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaturationO2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
