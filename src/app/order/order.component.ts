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

  sort: {column: string, direction: string} = {column: '', direction: ''};

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
    this.sort.column = column;
    this.sort.direction = direction;

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  onSelect(item: Item) {
    console.log("onselect");
    this.service.selectedItems.push(item)
  }

  onDeselect(index: number) {
    console.log("onDeselect");
    this.service.selectedItems.splice(index);
  }

  /** Returns an item if country selected. */
  isCountrySelected(country: Item) {
    return this.service.selectedItems.find((item: Item) => item.id === country.id);
  }

  /** Track by for country list. */
  trackByFn(index: number, item: Item) {
    return item.id
  }

  /** Toggles the selecton. */
  toggleSelection(country: Item) {
    const selectedItems = this.service.selectedItems;
    const itemIndex = this.service.selectedItems.findIndex((item: Item) => item.id === country.id);
    if(itemIndex > -1) {
      this.service.selectedItems.splice(itemIndex, 1);
    } else {
      this.service.selectedItems.push(country);
    }
  }

}
