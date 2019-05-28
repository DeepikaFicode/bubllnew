import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAdminComponent } from './language-admin.component';

describe('LanguageAdminComponent', () => {
  let component: LanguageAdminComponent;
  let fixture: ComponentFixture<LanguageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
