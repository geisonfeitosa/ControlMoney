import { SharedModule } from './../shared/shared.module';
import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialReleaseComponent } from './financial-release/financial-release.component';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [
    WalletComponent,
    FinancialReleaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutsModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
