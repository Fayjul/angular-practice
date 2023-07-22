import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingA1Component } from './data-binding-a1.component';

describe('DataBindingA1Component', () => {
  let component: DataBindingA1Component;
  let fixture: ComponentFixture<DataBindingA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingA1Component]
    });
    fixture = TestBed.createComponent(DataBindingA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
