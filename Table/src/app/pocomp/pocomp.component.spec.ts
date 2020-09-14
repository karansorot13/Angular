import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocompComponent } from './pocomp.component';

describe('PocompComponent', () => {
  let component: PocompComponent;
  let fixture: ComponentFixture<PocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
