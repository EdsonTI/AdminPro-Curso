import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagenofountComponent } from './pagenofount/pagenofount.component';




@NgModule ({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        PagenofountComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        PagenofountComponent
    ]
})

export class SharedModule { }
