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
    content: 'Реализовать приложение для просмотра текстовых заметок. Интерфейс приложения должен состоять из 3 компонентов: верхняя шапка с названием, боковое меню со списком заметок, область для просмотра выбранной заметки.'
  },
  {
    id: 2,
    name: 'Заметка 2',
    content: 'Каждая заметка должна иметь заголовок и текст. В боковом меню выводятся заголовки, при выборе одного из них - справа выводится текст выбранной заметки.'
  },
  {
    id: 3,
    name: 'Заметка 3',
    content: 'Интерфейс должен растягиваться на всё окно браузера. При этом шапка имеет фиксированную высоту, а боковое меню - фиксированную ширину.'
  },
  {
    id: 4,
    name: 'Заметка 4',
    content: 'Хранение предустановленных заметок реализовать в виде массива объектов, а не в структуре HTML.'
  },
  {
    id: 5,
    name: 'Заметка 5',
    content: 'Реализовать возможность добавления заметок. Реализовать возможность доступа к каждой заметке по прямой ссылке.'
  }
  ]

  selectedNoteId$ = new BehaviorSubject<number>(1);

  constructor() { }

  // Имитация получения данных с сервера
  getNotes(): Observable<INote[]> {
    return new Observable(observer => observer.next(this.notes))

  }
}

