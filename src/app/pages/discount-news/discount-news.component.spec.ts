import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountNewsComponent } from './discount-news.component';

describe('DiscountNewsComponent', () => {
  let component: DiscountNewsComponent;
  let fixture: ComponentFixture<DiscountNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
