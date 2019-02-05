import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventoPage } from './edit-evento.page';

describe('EditEventoPage', () => {
  let component: EditEventoPage;
  let fixture: ComponentFixture<EditEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
