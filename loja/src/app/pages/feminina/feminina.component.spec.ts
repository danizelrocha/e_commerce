import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemininaComponent } from './feminina.component';

describe('FemininaComponent', () => {
  let component: FemininaComponent;
  let fixture: ComponentFixture<FemininaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FemininaComponent]
    });
    fixture = TestBed.createComponent(FemininaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
