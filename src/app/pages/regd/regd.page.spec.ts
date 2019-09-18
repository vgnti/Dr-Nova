import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdPage } from './regd.page';

describe('RegdPage', () => {
  let component: RegdPage;
  let fixture: ComponentFixture<RegdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegdPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
