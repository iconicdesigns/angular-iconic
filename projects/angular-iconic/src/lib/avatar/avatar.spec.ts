import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicAvatar } from './avatar';

describe('Avatar', () => {
  let component: IconicAvatar;
  let fixture: ComponentFixture<IconicAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicAvatar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
