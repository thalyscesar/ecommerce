import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmProdutoComponent } from './frm-produto.component';

describe('FrmProdutoComponent', () => {
  let component: FrmProdutoComponent;
  let fixture: ComponentFixture<FrmProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
