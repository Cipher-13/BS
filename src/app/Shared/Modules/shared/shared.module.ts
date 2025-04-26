import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
     MatButtonModule,
     MatToolbarModule,
    MatListModule,
    MatDividerModule
  ],
  exports:[ReactiveFormsModule,RouterModule,MatIconModule,MatTooltipModule,MatButtonModule, MatListModule,MatDividerModule,MatToolbarModule]
})
export class SharedModule { }
