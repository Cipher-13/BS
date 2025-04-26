import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeableComponent } from './changeable.component';

describe('ChangeableComponent', () => {
  let component: ChangeableComponent;
  let fixture: ComponentFixture<ChangeableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
