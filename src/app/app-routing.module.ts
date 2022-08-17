import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path: 'timer', component: TimerComponent},
  {path: 'to-do-list', component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TimerComponent, ToDoListComponent]