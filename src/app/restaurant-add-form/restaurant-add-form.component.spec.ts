import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddFormComponent } from './restaurant-add-form.component';

describe('RestaurantAddFormComponent', () => {
  let component: RestaurantAddFormComponent;
  let fixture: ComponentFixture<RestaurantAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
