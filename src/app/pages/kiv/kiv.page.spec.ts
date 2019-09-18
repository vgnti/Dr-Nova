import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KivPage } from './kiv.page';

describe('KivPage', () => {
  let component: KivPage;
  let fixture: ComponentFixture<KivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KivPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
