import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IArt } from '../models/art';
import { art } from './data';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtsService {
  arts: BehaviorSubject<IArt[]> = new BehaviorSubject(null);;
  artsCollections: AngularFirestoreCollection<IArt>;

  constructor(
    private fs: AngularFirestore
  ) {
    this.fetchArts(); }

   fetchArts() {
    this.artsCollections = this.fs.collection<IArt>('art');
    this.artsCollections.valueChanges()
    .subscribe(
      {
        next: (res: IArt[]) => {
          console.log(res);
          this.arts.next(res);
        }
      }
    );
   }

   async createArt(a: IArt){
    this.fs.collection('art').add(a).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
   }

   bookMarked(a: IArt) {
    const pos = this.arts.value.findIndex(val => val.id === a.id);
    const c = this.arts.value.find(value => value.id === a.id);
    if(c) {
      this.arts.value.splice(pos, 1);
      c.bookmarked = !c.bookmarked;
      this.arts.value.splice(pos, 0, c);
      localStorage.setItem('ARTS', JSON.stringify(this.arts.value));
    }
  }

   getArts(): IArt[] {
     return this.arts.value;
   }

   getBookMarkedArts(): IArt[] {
    return this.arts.value.filter(val => val.bookmarked === true);
  }

   getArt(id: number): IArt {
    return this.arts.value.find(val => val.id === id);
   }

   searchBookMarked(name: string ): IArt[] {
    return this.arts.value.filter(val => val.title.toLowerCase().includes(name.toLowerCase()) && val.bookmarked);
   }

   search(name: string ): IArt[] {
    return this.arts.value.filter(val => val.title.toLowerCase().includes(name.toLowerCase()));
   }
}
