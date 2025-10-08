import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconicTag } from './tag';

describe('IconicTag', () => {
  let component: IconicTag;
  let fixture: ComponentFixture<IconicTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconicTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconicTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
