import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/User/User';

@Component({
  selector: 'app-user-alert',
  templateUrl: './user-alert.component.html',
  styleUrls: ['./user-alert.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAlertComponent {
  constructor(
    public dialogRef: MatDialogRef<UserAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  get fixedUrl(){
    return `https://${this.data.website}`;
  }
}
