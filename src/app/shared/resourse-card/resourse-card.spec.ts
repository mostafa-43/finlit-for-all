import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourseCard } from './resourse-card';

describe('ResourseCard', () => {
  let component: ResourseCard;
  let fixture: ComponentFixture<ResourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourseCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourseCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
