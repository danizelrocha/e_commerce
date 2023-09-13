import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasculinaComponent } from './masculina.component';

describe('MasculinaComponent', () => {
  let component: MasculinaComponent;
  let fixture: ComponentFixture<MasculinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasculinaComponent]
    });
    fixture = TestBed.createComponent(MasculinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
