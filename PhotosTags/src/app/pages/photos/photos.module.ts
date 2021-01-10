import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { PhotoCardComponent } from 'src/app/components/photo-card/photo-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPtBrPaginatorIntl } from 'src/app/components/tables/generic-table/ptbr-pagination/ptbr-pagination';

@NgModule({
  declarations: [PhotosComponent, PhotoCardComponent],
  imports: [CommonModule, MaterialModule, LoadingModule],
  exports: [CommonModule, PhotosComponent],
  providers: [{ provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() }]
})
export class PhotosModule {}
