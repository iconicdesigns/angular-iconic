import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicButtonGroup } from './button-group';

describe('ButtonGroup', () => {
  let component: IconicButtonGroup;
  let fixture: ComponentFixture<IconicButtonGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicButtonGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicButtonGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
