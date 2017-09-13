import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotFindComponent } from './cannot-find.component';

describe('CannotFindComponent', () => {
  let component: CannotFindComponent;
  let fixture: ComponentFixture<CannotFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannotFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannotFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
