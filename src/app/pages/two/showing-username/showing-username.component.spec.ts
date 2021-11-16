import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingUsernameComponent } from './showing-username.component';

describe('ShowingUsernameComponent', () => {
  let component: ShowingUsernameComponent;
  let fixture: ComponentFixture<ShowingUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
