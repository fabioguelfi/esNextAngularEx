import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfComponent } from './array-of.component';

describe('ArrayOfComponent', () => {
  let component: ArrayOfComponent;
  let fixture: ComponentFixture<ArrayOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
