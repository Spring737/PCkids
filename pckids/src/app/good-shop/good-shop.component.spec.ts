import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodShopComponent } from './good-shop.component';

describe('GoodShopComponent', () => {
  let component: GoodShopComponent;
  let fixture: ComponentFixture<GoodShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
