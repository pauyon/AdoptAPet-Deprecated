import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptFormComponent } from './adopt-form.component';

describe('AdoptFormComponent', () => {
  let component: AdoptFormComponent;
  let fixture: ComponentFixture<AdoptFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
