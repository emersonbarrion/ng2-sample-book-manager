/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';

describe('Component: SideNav', () => {
  it('should create an instance', () => {
    let component = new SideNavComponent();
    expect(component).toBeTruthy();
  });
});
