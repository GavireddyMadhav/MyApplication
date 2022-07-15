import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiletterComponent } from './miletter.component';

describe('MiletterComponent', () => {
  let component: MiletterComponent;
  let fixture: ComponentFixture<MiletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
