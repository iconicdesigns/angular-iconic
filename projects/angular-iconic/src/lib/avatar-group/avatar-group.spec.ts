import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicAvatarGroup } from './avatar-group';

describe('IconicAvatarGroup', () => {
  let component: IconicAvatarGroup;
  let fixture: ComponentFixture<IconicAvatarGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicAvatarGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicAvatarGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
