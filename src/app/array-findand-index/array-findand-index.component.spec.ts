import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFindandIndexComponent } from './array-findand-index.component';

describe('ArrayFindandIndexComponent', () => {
  let component: ArrayFindandIndexComponent;
  let fixture: ComponentFixture<ArrayFindandIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayFindandIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFindandIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
