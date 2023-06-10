import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaDatatableComponent } from './social-media-datatable.component';

describe('SocialMediaDatatableComponent', () => {
  let component: SocialMediaDatatableComponent;
  let fixture: ComponentFixture<SocialMediaDatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaDatatableComponent]
    });
    fixture = TestBed.createComponent(SocialMediaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
