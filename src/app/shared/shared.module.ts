import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/httpService/http.service';
import { NotificationService } from './services/notification/notification.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HttpService, NotificationService],
  exports: [CommonModule],
})
export class SharedModule {}
