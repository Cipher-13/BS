import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefaceComponent } from './preface.component';

describe('PrefaceComponent', () => {
  let component: PrefaceComponent;
  let fixture: ComponentFixture<PrefaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
