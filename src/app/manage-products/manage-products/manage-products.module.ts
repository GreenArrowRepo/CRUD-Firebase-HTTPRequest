import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerService } from 'src/app/appServices/server.service';
import { ManageProductsComponent } from './manage-products.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [

  {path: '', component:ManageProductsComponent}
]


@NgModule({
  declarations: [ManageProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  providers: [ServerService],
})
export class ManageProductsModule { }
