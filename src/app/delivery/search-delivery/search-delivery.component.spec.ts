import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeliveryComponent } from './search-delivery.component';

describe('SearchDeliveryComponent', () => {
  let component: SearchDeliveryComponent;
  let fixture: ComponentFixture<SearchDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
