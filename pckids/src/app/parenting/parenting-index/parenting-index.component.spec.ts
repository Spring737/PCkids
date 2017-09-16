import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingIndexComponent } from './parenting-index.component';

describe('ParentingIndexComponent', () => {
  let component: ParentingIndexComponent;
  let fixture: ComponentFixture<ParentingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
