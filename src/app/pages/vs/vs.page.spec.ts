import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsPage } from './vs.page';

describe('VsPage', () => {
  let component: VsPage;
  let fixture: ComponentFixture<VsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
