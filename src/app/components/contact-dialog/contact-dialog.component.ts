import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

type ContactData = { typeformUrl: string };

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent {
  url: string;
  constructor(@Inject(MAT_DIALOG_DATA) data: ContactData) {
    this.url = data.typeformUrl;
  }
}
