import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfoSharedComponent } from './country-info-shared.component';

describe('CountryInfoSharedComponent', () => {
  let component: CountryInfoSharedComponent;
  let fixture: ComponentFixture<CountryInfoSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryInfoSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInfoSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
