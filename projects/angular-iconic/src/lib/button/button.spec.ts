import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicButton } from './button';

describe('IconicButton', () => {
  let component: IconicButton;
  let fixture: ComponentFixture<IconicButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
