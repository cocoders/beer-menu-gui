import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Beer {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  // beers$ = of([]);

  // beers$ = of([
  //   {
  //     name: 'California', description: 'California, czyli AIPA w naszym wykonaniu, jest małym amerykańskim snem ' +
  //     'zamkniętym pod kapslem. To kaskada cytrusowych, kwiatowych aromatów z lekką nutą żywiczności i słodowości, ' +
  //     'która przeniesie Cię na zachodnie wybrzeże jednego z najpiękniejszych stanów USA. Chmielona amerykańskimi ' +
  //     'odmianami chmielu, gwarantuje wyraźną, dobrze zbalansowaną i niezalegającą goryczkę.'
  //   },
  //   {
  //     name: 'Harry', description: 'Harry wyjechał na studia do USA. Jako anglik pijał herbatę earl grey, ' +
  //     'ale musiał się dostosować do amerykanów, którzy bardziej niż herbatę, lubią piwo. Specjalnie dla Harry`ego ' +
  //     'uwarzyliśmy lekkie, jasne piwo o niskiej goryczy i wyraźnym, ale nie dominującym charakterze herbaty ' +
  //     'earl-grey.'
  //   },
  //   {
  //     name: 'Nonsens Pils',
  //     description: 'Klasyczny pils z małym twistem w postaci herbaty earl grey. Uwarzony dla Pubu Nonsens w Gdyni.'
  //   }
  // ]);

  beers$ = this.db.collection<Beer>('beers').valueChanges();

  // constructor() { }
  constructor(private db: AngularFirestore) { }
}
