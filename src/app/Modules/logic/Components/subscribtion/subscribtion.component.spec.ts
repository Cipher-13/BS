import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribtionComponent } from './subscribtion.component';

describe('SubscribtionComponent', () => {
  let component: SubscribtionComponent;
  let fixture: ComponentFixture<SubscribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
