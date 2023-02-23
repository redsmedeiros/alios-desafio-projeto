import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassoAPassoComponent } from './passo-a-passo.component';

describe('PassoAPassoComponent', () => {
  let component: PassoAPassoComponent;
  let fixture: ComponentFixture<PassoAPassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassoAPassoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassoAPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
