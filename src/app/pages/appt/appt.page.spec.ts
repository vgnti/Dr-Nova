import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptPage } from './appt.page';

describe('ApptPage', () => {
  let component: ApptPage;
  let fixture: ComponentFixture<ApptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
