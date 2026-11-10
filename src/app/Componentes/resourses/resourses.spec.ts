import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resourses } from './resourses';

describe('Resourses', () => {
  let component: Resourses;
  let fixture: ComponentFixture<Resourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
