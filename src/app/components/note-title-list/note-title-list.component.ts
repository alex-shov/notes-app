import { Component } from '@angular/core';
import { INote } from '../../models/notes';
import { NotesService } from '../../services/notes.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-title-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-title-list.component.html',
  styleUrl: './note-title-list.component.scss'
})
export class NoteTitleListComponent {

  notes: INote[] = []
  id: any
  selectedNoteId!: number;
  getNotesSub: Subscription = new Subscription;
  selectedNoteIdSub: Subscription = new Subscription;

  constructor(private notesService: NotesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNotesSub = this.notesService.getNotes().subscribe(notes => this.notes = notes)
    this.selectedNoteIdSub = this.notesService.selectedNoteId$.subscribe(id => this.selectedNoteId = id)
    this.id = +this.activatedRoute.children[0]?.snapshot.params['id']; // чтобы выделить соответствующий пункт меню, если зашли по прямой ссылке
  }

  selectNote(id: number) {
    this.notesService.selectedNoteId$.next(id)
    this.id = id
    this.router.navigate(['/note', id])
  }

  ngOnDestroy(){
    if(this.getNotesSub) {
      this.getNotesSub.unsubscribe()
    }
    if(this.selectedNoteIdSub) {
      this.selectedNoteIdSub.unsubscribe()
    }
  }

}
