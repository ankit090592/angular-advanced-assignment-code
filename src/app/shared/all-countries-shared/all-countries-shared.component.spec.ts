import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesSharedComponent } from './all-countries-shared.component';

describe('AllCountriesSharedComponent', () => {
  let component: AllCountriesSharedComponent;
  let fixture: ComponentFixture<AllCountriesSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCountriesSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
