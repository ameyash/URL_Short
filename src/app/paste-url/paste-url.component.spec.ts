import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteURLComponent } from './paste-url.component';

describe('PasteURLComponent', () => {
  let component: PasteURLComponent;
  let fixture: ComponentFixture<PasteURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteURLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
