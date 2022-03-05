import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userCredentials: Observable<any>;

  constructor(public auth: AngularFireAuth) {
    this.userCredentials = this.auth.user.pipe(map(res => res));
  }

  get currentUser() {
    return this.userCredentials.pipe(
      map((res: User) => res)
    );
  }

  async login({ email, password}: { email: string; password: string}) {
    await this.auth.signInWithEmailAndPassword(email, password);
  }

  async loginWithGoogle() {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async guest() {
    await this.auth.signInAnonymously();
  }

  async logout() {
    await this.auth.signOut();
  }
}
