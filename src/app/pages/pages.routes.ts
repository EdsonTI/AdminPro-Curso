import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';



const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'acount-settings', component: AcountSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];
export const PAGUES_ROUTES = RouterModule.forChild( pageRoutes );
