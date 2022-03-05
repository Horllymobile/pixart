import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { IArt } from 'src/app/core/models/art';
import { AddToCartComponent } from './add-to-cart.component';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;
  let spy: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartComponent ],
      imports: [IonicModule.forRoot()],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 0', () => {
    expect(component.item).toEqual(0);
  });

  it('should close modal', () => {
    const art: IArt = {
      id: 1,
      title: 'Cock Pit',
      image: '../../../assets/art-1.jpeg',
      price: 12.55,
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
      bookmarked: false,
      author: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        userName: '@john_doe'
      }
    };
    // spy = spyOn(component, 'save').and.returnValue(new Promise((res, rej) => res));
    // expect(component.save(art, 4)).toHaveBeenCalled();
  });
});
