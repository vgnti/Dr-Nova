import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPage } from './fsh.page';

describe('FshPage', () => {
  let component: FshPage;
  let fixture: ComponentFixture<FshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FshPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
