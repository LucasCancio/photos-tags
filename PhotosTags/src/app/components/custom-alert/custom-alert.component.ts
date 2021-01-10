import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from 'src/app/models/Alert';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {

  alert = {
    title: '',
    description: '',
    btnSuccess: 'OK',
    btnCancel: 'Cancelar',
    colorBtnSuccess: 'accent',
    colorBtnCancel: 'warn',
    cancelable: false
  } as Alert;

  constructor(public dialogRef: MatDialogRef<CustomAlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Alert) { }

  ngOnInit() {
    if (this.data) {
      this.alert.title = this.data.title;
      this.alert.description = this.data.description;
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.colorBtnSuccess = this.data.colorBtnSuccess || this.alert.colorBtnSuccess;
      this.alert.colorBtnCancel = this.data.colorBtnCancel || this.alert.colorBtnCancel;
      this.alert.cancelable = this.data.cancelable || this.alert.cancelable;
    }
  }

}
