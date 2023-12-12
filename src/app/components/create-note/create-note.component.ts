import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INote, Note } from '../../models/notes';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent {

  createForm!: FormGroup;
  newNote!: INote;

  constructor(private router: Router, public notesService:NotesService) { }

  ngOnInit() {
    this.newNote = new Note()
    this.createForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'content': new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    if(this.createForm.invalid) return
    this.notesService.notes.push({
      id: Date.now(), // генерим случайное число
      name: this.createForm.value.name,
      content: this.createForm.value.content
    })
    this.router.navigate(['/'])
  }

  onCancel() {
    this.router.navigate(['/'])
  }

}
