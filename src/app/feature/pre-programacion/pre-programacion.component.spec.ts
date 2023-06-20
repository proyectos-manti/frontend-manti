import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreProgramacionComponent } from './pre-programacion.component';

describe('PreProgramacionComponent', () => {
  let component: PreProgramacionComponent;
  let fixture: ComponentFixture<PreProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreProgramacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
