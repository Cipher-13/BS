import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { layoutResolver } from './layout.resolver';

describe('layoutResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => layoutResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
