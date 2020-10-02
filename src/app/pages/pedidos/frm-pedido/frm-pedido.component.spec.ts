import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmPedidoComponent } from './frm-pedido.component';

describe('FrmPedidoComponent', () => {
  let component: FrmPedidoComponent;
  let fixture: ComponentFixture<FrmPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
