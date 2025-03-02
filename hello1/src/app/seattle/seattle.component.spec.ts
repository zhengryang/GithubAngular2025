import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleComponent } from './seattle.component';

describe('SeattleComponent', () => {
  let component: SeattleComponent;
  let fixture: ComponentFixture<SeattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeattleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
