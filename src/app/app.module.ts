import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { NgbAccordionModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { NgbdSelectableHeader } from './directives/selectable.directive';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    OrderComponent,
    NgbdSortableHeader,
    NgbdSelectableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbModule,
    FormsModule,
    CommonModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
