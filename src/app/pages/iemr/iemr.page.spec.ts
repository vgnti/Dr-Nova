import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IemrPage } from './iemr.page';

describe('IemrPage', () => {
  let component: IemrPage;
  let fixture: ComponentFixture<IemrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IemrPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IemrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
