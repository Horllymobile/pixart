import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) {}



}
