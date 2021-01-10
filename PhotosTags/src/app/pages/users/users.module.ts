import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'src/app/components/tables/generic-table/generic-table.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { UserAlertComponent } from 'src/app/components/user-alert/user-alert.component';

@NgModule({
  declarations: [UsersComponent, UserAlertComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    MaterialModule,
    LoadingModule,
  ],
  exports: [CommonModule, UsersComponent, TableModule],
})
export class UsersModule {}
