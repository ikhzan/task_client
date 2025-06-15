import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TeamComponent } from './team/team.component';
import { KpiComponent } from './kpi/kpi.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'auth', component: AuthComponent},
    { path: 'kpi', component: KpiComponent},
    { path: 'tasks', component: TasksComponent},
    { path: 'teams', component: TeamComponent},
    { path: 'users', component: UsersComponent},
];
