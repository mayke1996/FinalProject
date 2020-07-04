import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaEditPage } from './carga-edit.page';

describe('CargaEditPage', () => {
  let component: CargaEditPage;
  let fixture: ComponentFixture<CargaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
