import {  Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/models/Photo/Photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  $photos: Observable<Photo[]>;

  length: number = 0;
  pageSize: number = 6;

  pageEvent: PageEvent;

  constructor(private service: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.$photos = this.service.getAll();
    setTimeout(() => {
      this.$photos.subscribe((data) => {
        this.length = data.length;
      });
    }, 1200);
  }
}
