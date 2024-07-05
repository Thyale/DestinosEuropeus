import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaMissaoComponent } from './nossa-missao.component';

describe('NossaMissaoComponent', () => {
  let component: NossaMissaoComponent;
  let fixture: ComponentFixture<NossaMissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NossaMissaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossaMissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
