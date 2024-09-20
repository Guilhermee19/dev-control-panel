import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DetailProjectComponent } from './pages/projects/detail-project/detail-project.component';
import { TaskPanelComponent } from './pages/task-panel/task-panel.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'projects/:id',
        component: DetailProjectComponent
      },
      {
        path: 'tasks',
        component: TaskPanelComponent
      },
      { path: '**', redirectTo: '' },
    ]
  },
];
