import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUrlComponent } from './result-url.component';

describe('ResultUrlComponent', () => {
  let component: ResultUrlComponent;
  let fixture: ComponentFixture<ResultUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
