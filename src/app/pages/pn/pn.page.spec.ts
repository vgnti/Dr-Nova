import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnPage } from './pn.page';

describe('PnPage', () => {
  let component: PnPage;
  let fixture: ComponentFixture<PnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PnPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
