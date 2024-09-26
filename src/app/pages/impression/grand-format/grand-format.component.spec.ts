import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandFormatComponent } from './grand-format.component';

describe('GrandFormatComponent', () => {
  let component: GrandFormatComponent;
  let fixture: ComponentFixture<GrandFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrandFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
