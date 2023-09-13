import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaFemininaComponent } from './moda-feminina.component';

describe('ModaFemininaComponent', () => {
  let component: ModaFemininaComponent;
  let fixture: ComponentFixture<ModaFemininaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaFemininaComponent]
    });
    fixture = TestBed.createComponent(ModaFemininaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
