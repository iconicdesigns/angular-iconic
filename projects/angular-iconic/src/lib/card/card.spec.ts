import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicCard } from './card';

describe('Card', () => {
  let component: IconicCard;
  let fixture: ComponentFixture<IconicCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
