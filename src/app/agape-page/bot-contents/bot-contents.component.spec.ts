import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotContentsComponent } from './bot-contents.component';

describe('BotContentsComponent', () => {
  let component: BotContentsComponent;
  let fixture: ComponentFixture<BotContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
