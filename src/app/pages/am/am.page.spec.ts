import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmPage } from './am.page';

describe('AmPage', () => {
  let component: AmPage;
  let fixture: ComponentFixture<AmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
