import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincemasterformComponent } from './provincemasterform.component';

describe('ProvincemasterformComponent', () => {
  let component: ProvincemasterformComponent;
  let fixture: ComponentFixture<ProvincemasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvincemasterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincemasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
