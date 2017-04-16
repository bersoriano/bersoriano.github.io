/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HackerGarageComponent } from './hacker-garage.component';

describe('HackerGarageComponent', () => {
  let component: HackerGarageComponent;
  let fixture: ComponentFixture<HackerGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
