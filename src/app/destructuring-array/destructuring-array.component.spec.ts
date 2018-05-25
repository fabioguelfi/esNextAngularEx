import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructuringArrayComponent } from './destructuring-array.component';

describe('DestructuringArrayComponent', () => {
  let component: DestructuringArrayComponent;
  let fixture: ComponentFixture<DestructuringArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructuringArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructuringArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
