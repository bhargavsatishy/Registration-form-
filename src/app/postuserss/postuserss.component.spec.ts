import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuserssComponent } from './postuserss.component';

describe('PostuserssComponent', () => {
  let component: PostuserssComponent;
  let fixture: ComponentFixture<PostuserssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostuserssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostuserssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
