import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutolojaComponent } from './produtoloja.component';

describe('ProdutolojaComponent', () => {
  let component: ProdutolojaComponent;
  let fixture: ComponentFixture<ProdutolojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutolojaComponent]
    });
    fixture = TestBed.createComponent(ProdutolojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
