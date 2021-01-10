import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPtBrPaginatorIntl } from './ptbr-pagination/ptbr-pagination';
import { TableComponent } from './generic-table.component';
import { DataPropertyGetterPipe } from './data-property-getter-pipe/data-property-getter.pipe';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  declarations: [TableComponent, DataPropertyGetterPipe],
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent],
  providers: [{ provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() }],
})
export class TableModule {}
