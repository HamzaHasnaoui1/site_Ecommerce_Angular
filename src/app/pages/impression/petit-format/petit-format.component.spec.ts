import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitFormatComponent } from './petit-format.component';

describe('PetitFormatComponent', () => {
  let component: PetitFormatComponent;
  let fixture: ComponentFixture<PetitFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetitFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
