import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaVendaComponent } from './tela-venda.component';

describe('TelaVendaComponent', () => {
  let component: TelaVendaComponent;
  let fixture: ComponentFixture<TelaVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
