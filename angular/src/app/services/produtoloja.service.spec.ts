import { TestBed } from '@angular/core/testing';

import { ProdutolojaService } from './produtoloja.service';

describe('ProdutolojaService', () => {
  let service: ProdutolojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutolojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
