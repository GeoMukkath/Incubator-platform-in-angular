import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupMoreDetailsComponent } from './startup-more-details.component';

describe('StartupMoreDetailsComponent', () => {
  let component: StartupMoreDetailsComponent;
  let fixture: ComponentFixture<StartupMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
