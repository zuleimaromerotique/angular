import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormikComponent } from './formik.component';

describe('FormikComponent', () => {
  let component: FormikComponent;
  let fixture: ComponentFixture<FormikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
