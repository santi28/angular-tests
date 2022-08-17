import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { EditableTableComponent } from './pages/editable-table/editable-table.component';

const routes: Routes = [
  { path: 'table/editable', component: EditableTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
