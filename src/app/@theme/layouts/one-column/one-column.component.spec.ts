import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnComponent } from './one-column.component';

describe('OneColumnComponent', () => {
  let component: OneColumnComponent;
  let fixture: ComponentFixture<OneColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
