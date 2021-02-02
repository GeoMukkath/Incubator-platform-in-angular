import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupDetailsComponent } from './startup-details.component';

describe('StartupDetailsComponent', () => {
  let component: StartupDetailsComponent;
  let fixture: ComponentFixture<StartupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
