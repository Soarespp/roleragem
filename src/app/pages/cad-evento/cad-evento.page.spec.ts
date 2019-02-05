import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEventoPage } from './cad-evento.page';

describe('CadEventoPage', () => {
  let component: CadEventoPage;
  let fixture: ComponentFixture<CadEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
