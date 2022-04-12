import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../models/item.model';

export type SortColumn = keyof Item | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'tr[selectable]',
  host: {
    '(click)': 'sel()'
  }
})
export class NgbdSelectableHeader {
  @Input() selectable: number | undefined;
  @Output() select = new EventEmitter<number>();
  @Output() deselect = new EventEmitter<number>();
  clicked = false

  sel() {
    if(this.clicked){
      this.select.emit(this.selectable);
      this.clicked = false;
      return;
    }
    this.deselect.emit(this.selectable);
    this.clicked = true;
  }
}