import { Component } from '@angular/core';
import {
MatDialogActions,
  MatDialogRef,
  MatDialogContent
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-alert',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent],
  templateUrl: './delete-alert.component.html',
  styleUrl: './delete-alert.component.css',
})
export class DeleteAlertComponent {
  vendorIds: number[] = [];

  constructor(public dialogRef: MatDialogRef<DeleteAlertComponent>) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
