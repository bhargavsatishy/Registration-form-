import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostusersComponent } from './postusers.component';

describe('PostusersComponent', () => {
  let component: PostusersComponent;
  let fixture: ComponentFixture<PostusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
