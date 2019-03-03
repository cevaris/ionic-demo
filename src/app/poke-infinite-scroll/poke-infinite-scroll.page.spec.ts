import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInfiniteScrollPage } from './poke-infinite-scroll.page';

describe('PokeInfiniteScrollPage', () => {
  let component: PokeInfiniteScrollPage;
  let fixture: ComponentFixture<PokeInfiniteScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeInfiniteScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeInfiniteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
