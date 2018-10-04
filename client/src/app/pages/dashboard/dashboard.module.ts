import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardHomeComponent} from './home/dashboard-home.component';
import {UserListComponent} from './user-list/user-list.component';
import {CommunityHomeComponent} from './community/community-home.component';
import {ActivityCardComponent} from './activity-card/activity-card.component';
import {NotFoundModule} from '../not-found/not-found.module';
import {SmartTableModule} from './smart-table/smart-table.module';
import { UserEditModalComponent } from './user-list/user-edit-modal/user-edit-modal.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    SmartTableModule,
    Ng2SmartTableModule,
    NotFoundModule,
    DashboardRoutingModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    CommunityHomeComponent,
    ProfileCardComponent,
    UserListComponent,
    ActivityCardComponent,
    UserEditModalComponent,
  ],
  entryComponents: [
    UserEditModalComponent,
  ],
  providers: [],
})
export class DashboardModule { }
