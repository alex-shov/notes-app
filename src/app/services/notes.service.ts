import { Injectable } from '@angular/core';
import { INote } from '../models/notes';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: INote[] = [{
    id: 1,
    name: 'Заметка 1',
    content: 'Текст заметки 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa, vel saepe inventore perspiciatis temporibus non consequuntur, fugiat eaque at autem dicta. A commodi quibusdam sit voluptas saepe impedit possimus?'
  },
  {
    id: 2,
    name: 'Заметка 2',
    content: 'Текст заметки 2. Quas ex ad mollitia corporis aliquam dolorum aliquid deleniti minus accusamus doloremque magni maxime, commodi dolor unde id quibusdam quisquam, quos sint, quam dicta odio sequi libero voluptas nulla! Pariatur voluptates libero consectetur ad ipsam ut quibusdam harum quos eos ducimus. Similique repudiandae animi, dolor quidem facilis asperiores deleniti.'
  },
  {
    id: 3,
    name: 'Заметка 3',
    content: 'Текст заметки 3. Ut aliquid debitis iste placeat illo, error voluptatem dolore libero, repudiandae soluta porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa, vel saepe inventore perspiciatis temporibus non consequuntur, fugiat eaque at autem dicta. A commodi quibusdam sit voluptas saepe impedit possimus?'
  }
  ]

  selectedNoteId$ = new BehaviorSubject<number>(1);

  constructor() { }

  // Имитация получения данных с сервера
  getNotes(): Observable<INote[]> {
    return new Observable(observer => observer.next(this.notes))

  }
}

