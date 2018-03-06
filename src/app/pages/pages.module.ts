
import { PagesComponent } from './pages.component';

import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PAGUES_ROUTES } from './pages.routes';

// ng2 charts
import { ChartsModule } from 'ng2-charts';

// temporal
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// configuración del tema
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent, // temporal
        GraficoDonaComponent, AcountSettingsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGUES_ROUTES,
        ChartsModule, // charts module, par las graficas
        FormsModule // temporal
    ]
})

export class PagesModule { }
