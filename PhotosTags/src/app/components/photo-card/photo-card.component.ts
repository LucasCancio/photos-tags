import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo/Photo';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent {
  @Input() photo: Photo;

  constructor() {}
}
