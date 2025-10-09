import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicBadge } from './badge';

describe('IconicBadge', () => {
  let component: IconicBadge;
  let fixture: ComponentFixture<IconicBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
