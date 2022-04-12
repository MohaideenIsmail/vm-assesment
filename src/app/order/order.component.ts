import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { NgbdSortableHeader } from '../directives/sortable.directive';
import { Item } from '../models/item.model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  countries$: Observable<Item[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CartService) {
    this.countries$ = service.items$;
    this.total$ = service.total$;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSort({column, direction}: any) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  onSelect(item: Item) {
    this.service.selectedItems.push(item)
  }

  onDeselect(index: number) {
    this.service.selectedItems.splice(index);
  }
}
