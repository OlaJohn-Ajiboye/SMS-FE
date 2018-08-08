import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  city = new FormControl('', [Validators.required]);
  start_date = new FormControl('', [Validators.required]);
  end_date = new FormControl('', [Validators.required]);
  color = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  getErrorMessage(type) {
    if (type === 'city') {
      return this.city.hasError('required') ? 'You must enter a value' :
        this.city.hasError('city') ? 'Not a valid city' :
          '';
    } else if (type === 'start_date') {
      return this.start_date.hasError('required') ? 'You must enter a value' :
        this.start_date.hasError('start_date') ? 'Not a valid start_date' :
          '';
    } else if (type === 'end_date') {
      return this.end_date.hasError('required') ? 'You must enter a value' :
        this.end_date.hasError('end_date') ? 'Not a valid end_date' :
          '';
    } else if (type === 'price') {
      return this.price.hasError('required') ? 'You must enter a value' :
        this.price.hasError('price') ? 'Not a valid price' :
          '';
    } else if (type === 'status') {
      return this.status.hasError('required') ? 'You must enter a value' :
        this.status.hasError('status') ? 'Not a valid status' :
          '';
    } else if (type === 'color') {
      return this.color.hasError('required') ? 'You must enter a value' :
        this.color.hasError('color') ? 'Not a valid color' :
          '';
    }
  }
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public detail: any, public dialog: MatDialog) { }

  ngOnInit() { }
  Save(): void {
    this.dialogRef.close({
      city: this.detail.editableData.city,
      start_date: this.detail.editableData.start_date,
      end_date: this.detail.editableData.end_date,
      price: this.detail.editableData.price,
      status: this.detail.editableData.status,
      color: this.detail.editableData.color

    });
  }
  Close(): void {
    this.dialogRef.close({
      city: this.detail.editableData.city,
      start_date: this.detail.editableData.start_date,
      end_date: this.detail.editableData.end_date,
      price: this.detail.editableData.price,
      status: this.detail.editableData.status,
      color: this.detail.editableData.color

    });
  }

}

