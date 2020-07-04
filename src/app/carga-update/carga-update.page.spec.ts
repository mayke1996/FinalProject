import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaUpdatePage } from './carga-update.page';

describe('CargaUpdatePage', () => {
  let component: CargaUpdatePage;
  let fixture: ComponentFixture<CargaUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
