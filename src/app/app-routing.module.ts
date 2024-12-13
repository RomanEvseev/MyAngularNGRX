import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelWithBooksComponent } from './panel-with-books/panel-with-books.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PanelWithBooksComponent },
  { path: '**', component: PanelWithBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
