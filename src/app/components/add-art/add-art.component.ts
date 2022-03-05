import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { LoadingController, ModalController } from '@ionic/angular';
import { ArtsService } from 'src/app/core/services/arts.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IArt } from 'src/app/core/models/art';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.scss'],
})
export class AddArtComponent implements OnInit {
  user: User;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  createArtForm: FormGroup;
  imageUrl = '';
  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private artService: ArtsService,
    private authService: AuthService
  ) { }

  get createArtFormData() {
    return this.createArtForm.controls;
  }

  ngOnInit() {
    this.getUser();
    this.initForm();
  }

  getUser() {
    this.authService.userCredentials.subscribe({
      next: (res) => {
        this.user = res;
        console.log(this.user);
      },
    });
  }

  async submit(){
    if(this.user){
      const loader = await this.loadingCtrl.create({
        animated: true,
        message: 'Creating Art',
        spinner: 'lines'
      });
      await loader.present();
      const art: IArt = {
        id: `${Date.now()}${Math.floor(Math.random() * 5 / 2)}`,
        title: this.createArtFormData.title.value,
        price: this.createArtFormData.price.value,
        description: this.createArtFormData.description.value,
        image: this.imageUrl,
        author: {
          id: this.user.uid,
          email: this.user.email,
          firstName: this.user.displayName.split(' ')[0],
          lastName: this.user.displayName.split(' ')[1],
          userName: this.user.displayName
        },
        reviews: []
      };
      await this.artService.createArt(art);
      await loader.dismiss();
      this.createArtForm.reset();
      this.imageUrl = '';
      this.modalCtrl.dismiss();
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = base64ToFile(event.base64);
    this.uploadImage(this.croppedImage);
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  initForm() {
    this.createArtForm = this.fb.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  async uploadImage(event?: any) {
    if(event){
      const loader = await this.loadingCtrl.create({
        animated: true,
        message: 'Uploading image',
        spinner: 'lines'
      });
      await loader.present();
      const filepath = `IMG${Date.now()}`;
      const fileRef = this.storage.ref(filepath);
      const task = this.storage.upload(filepath, event);
      task.snapshotChanges().subscribe({
        next: async (res) => {
          this.imageUrl = await res.ref.getDownloadURL();
          await loader.dismiss();
        },
        error: async (err) => {
          console.log(err);
          await loader.dismiss();
        }
      });
    }else {
      const loader = await this.loadingCtrl.create({
        animated: true,
        message: 'Uploading image',
        spinner: 'lines'
      });
      await loader.present();
      const filepath = `IMG${Date.now()}`;
      const fileRef = this.storage.ref(filepath);
      const task = this.storage.upload(filepath, this.croppedImage);
      task.snapshotChanges().subscribe({
        next: async (res) => {
          this.imageUrl = await res.ref.getDownloadURL();
          await loader.dismiss();
        },
        error: async (err) => {
          console.log(err);
          await loader.dismiss();
        }
      });
    }
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }


  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }

}
