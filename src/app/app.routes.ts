import { Routes } from '@angular/router';
import { BaseComponent } from './modules/base/base/base.component';
import { NoteComponent } from './components/note/note.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

export const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [{ path: 'note/:id', component: NoteComponent }]
    },
    {
        path: 'create',
        component: CreateNoteComponent,
    },
    { path: "**", redirectTo: "", component: BaseComponent }
];
