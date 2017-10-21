import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotMenusComponent } from './bot-menus.component';

describe('BotMenusComponent', () => {
  let component: BotMenusComponent;
  let fixture: ComponentFixture<BotMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
