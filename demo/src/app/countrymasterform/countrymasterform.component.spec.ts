import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrymasterformComponent } from './countrymasterform.component';

describe('CountrymasterformComponent', () => {
  let component: CountrymasterformComponent;
  let fixture: ComponentFixture<CountrymasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrymasterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrymasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
