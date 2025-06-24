import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailComponent } from './teamdetail.component';

describe('TeamdetailComponent', () => {
  let component: TeamdetailComponent;
  let fixture: ComponentFixture<TeamdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
