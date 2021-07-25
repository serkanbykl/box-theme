import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxesComponent } from './components/boxes/boxes.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DatePickerComponent } from './components/datePicker/datePicker.component';
import { HomeComponent } from './components/home/home.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'boxes',
    component: BoxesComponent,
  },
  {
    path: 'datePicker',
    component: DatePickerComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
