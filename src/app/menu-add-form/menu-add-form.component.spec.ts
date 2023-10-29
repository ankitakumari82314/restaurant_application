import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddFormComponent } from './menu-add-form.component';

describe('MenuAddFormComponent', () => {
  let component: MenuAddFormComponent;
  let fixture: ComponentFixture<MenuAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
