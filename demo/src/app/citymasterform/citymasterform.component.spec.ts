import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitymasterformComponent } from './citymasterform.component';

describe('CitymasterformComponent', () => {
  let component: CitymasterformComponent;
  let fixture: ComponentFixture<CitymasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitymasterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitymasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
