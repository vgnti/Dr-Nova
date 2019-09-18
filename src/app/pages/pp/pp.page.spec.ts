import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpPage } from './pp.page';

describe('PpPage', () => {
  let component: PpPage;
  let fixture: ComponentFixture<PpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PpPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
