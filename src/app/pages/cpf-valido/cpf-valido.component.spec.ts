import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfValidoComponent } from './cpf-valido.component';

describe('CpfValidoComponent', () => {
  let component: CpfValidoComponent;
  let fixture: ComponentFixture<CpfValidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfValidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfValidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
