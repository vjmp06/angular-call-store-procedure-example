import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallStoreProcedureComponent } from './call-store-procedure.component';

describe('CallStoreProcedureComponent', () => {
  let component: CallStoreProcedureComponent;
  let fixture: ComponentFixture<CallStoreProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallStoreProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallStoreProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
