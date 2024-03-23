import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should show logo', () => {
      expect(fixture.nativeElement.querySelector('[data-test = "logo"]')).toBeTruthy();
    });
    it('should show product', () => {
      expect(fixture.nativeElement.querySelector('[class="fa-solid fa-money-check-dollar"]')).toBeTruthy();
    });
});
