import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { INote } from '../../models/notes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {

  note!: INote | undefined;
  selectedNoteIdSub: Subscription = new Subscription;

  constructor(private notesService: NotesService) {
    this.selectedNoteIdSub = this.notesService.selectedNoteId$.subscribe(id => {
      this.note = this.notesService.notes.find(note => note.id == id)
    })
  }

ngOnDestroy(){
  if(this.selectedNoteIdSub) {
    this.selectedNoteIdSub.unsubscribe()
  }
}

}
