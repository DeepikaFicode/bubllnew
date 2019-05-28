import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from './pagination/pagination.module';
import { BroadcastNotificationComponent } from './user-communication/broadcast-notification/broadcast-notification.component';
import { ManualDocumentsComponent } from './user-communication/manual-documents/manual-documents.component';
import { SendManualComponent } from './user-communication/send-manual/send-manual.component';
@NgModule({
  declarations: [BroadcastNotificationComponent, ManualDocumentsComponent, SendManualComponent],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PaginationModule]
})
export class SharedModule { }
