import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectivFormComponent } from './rectiv-form.component';

describe('RectivFormComponent', () => {
  let component: RectivFormComponent;
  let fixture: ComponentFixture<RectivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectivFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
