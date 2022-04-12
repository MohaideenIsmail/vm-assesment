import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [NgbAccordionConfig],
})
export class CartComponent implements OnInit {
  constructor(config: NgbAccordionConfig, public service: CartService) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }

  get items() {
    return this.service.selectedItems;
  }
  ngOnInit(): void {}
}
