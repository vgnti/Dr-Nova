import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpemrPage } from './opemr.page';

describe('OpemrPage', () => {
  let component: OpemrPage;
  let fixture: ComponentFixture<OpemrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpemrPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpemrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
