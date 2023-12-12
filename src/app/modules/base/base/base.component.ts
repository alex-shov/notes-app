import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NoteTitleListComponent } from '../../../components/note-title-list/note-title-list.component';
import { NoteComponent } from '../../../components/note/note.component';
import { NotesService } from '../../../services/notes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterOutlet, NoteTitleListComponent, NoteComponent, CommonModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnInit {

  constructor(public notesService: NotesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.children[0]?.snapshot.params['id'];
    this.notesService.selectedNoteId$.next(id)
  }

}
