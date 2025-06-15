import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TeamComponent } from './team/team.component';
import { KpiComponent } from './kpi/kpi.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FaqComponent } from './faq/faq.component';
import { TaskdetailComponent } from './tasks/taskdetail/taskdetail.component';
import { TeamdetailComponent } from './team/teamdetail/teamdetail.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '', component: HomeComponent},
    { path: 'faq', component:FaqComponent},
    { path: 'kpi', component: KpiComponent},
    { path: 'tasks', component: TasksComponent},
    { path: 'tasks/:id', component: TaskdetailComponent},
    { path: 'teams', component: TeamComponent},
    { path: 'teams/:id', component: TeamdetailComponent},
    { path: 'users', component: UsersComponent},
    { path: '**', component: NotfoundComponent},
];
