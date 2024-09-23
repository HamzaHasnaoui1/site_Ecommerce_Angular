import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProduitsComponent } from './section-produits.component';

describe('SectionProduitsComponent', () => {
  let component: SectionProduitsComponent;
  let fixture: ComponentFixture<SectionProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
