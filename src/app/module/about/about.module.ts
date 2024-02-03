import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, FormsModule, AboutRoutingModule],
})
export class AboutModule {}
