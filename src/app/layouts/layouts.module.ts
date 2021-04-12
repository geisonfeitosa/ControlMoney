import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    RippleModule,
    ButtonModule,
    CardModule,
    ProgressBarModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    MessageService
  ]
})
export class LayoutsModule { }
