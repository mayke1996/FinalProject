import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaInitialPage } from './carga-initial.page';

describe('CargaInitialPage', () => {
  let component: CargaInitialPage;
  let fixture: ComponentFixture<CargaInitialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaInitialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaInitialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
