import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultParamsComponent } from './default-params.component';

describe('DefaultParamsComponent', () => {
  let component: DefaultParamsComponent;
  let fixture: ComponentFixture<DefaultParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
