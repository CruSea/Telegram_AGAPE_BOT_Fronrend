import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotSubMenusComponent } from './bot-sub-menus.component';

describe('BotSubMenusComponent', () => {
  let component: BotSubMenusComponent;
  let fixture: ComponentFixture<BotSubMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotSubMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotSubMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
