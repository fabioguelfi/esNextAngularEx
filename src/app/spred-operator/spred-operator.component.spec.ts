import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpredOperatorComponent } from './spred-operator.component';

describe('SpredOperatorComponent', () => {
  let component: SpredOperatorComponent;
  let fixture: ComponentFixture<SpredOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpredOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpredOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
