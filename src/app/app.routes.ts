import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TeamComponent } from './home/team/team.component';
import { KpiComponent } from './home/kpi/kpi.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FaqComponent } from './home/faq/faq.component';
import { TaskdetailComponent } from './home/tasks/taskdetail/taskdetail.component';
import { TeamdetailComponent } from './home/team/teamdetail/teamdetail.component';
import { PageComponent } from './home/page/page.component';
import { AboutComponent } from './home/about/about.component';
import { PageAuthComponent } from './auth/page-auth/page-auth.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: PageComponent },
            { path: 'about', component: AboutComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'kpi', component: KpiComponent },
            { path: 'tasks', component: TasksComponent },
            { path: 'tasks/:id', component: TaskdetailComponent },
            { path: 'teams', component: TeamComponent },
            { path: 'teams/:id', component: TeamdetailComponent },
        ]
    },
    {
        path: 'auth', component: AuthComponent, children: [
            { path: '', component: PageAuthComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },

    { path: 'users', component: UsersComponent },
    { path: '**', component: NotfoundComponent },
];
