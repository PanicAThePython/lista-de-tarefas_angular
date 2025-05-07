import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItem } from '../../interface/IListItem.interface';

@Component({
  selector: 'app-input-list-item',
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {

  @Input({required: true}) public inputListItems: IListItem[] = [];
  @Output() public outputUpdateItemCheckbox = new EventEmitter<{ checked: boolean, id: string }>();

  public updateItemCheckbox(checked: boolean, id: string){
    return this.outputUpdateItemCheckbox.emit({
      id, checked
    })
  }

  @Output() public outputUpdateItemText = new EventEmitter<{ id: string, value: string }>();

  public updateItemText(id: string, value: string){
    return this.outputUpdateItemText.emit({
      id, value
    })
  }

  @Output() public outputDeleteItem = new EventEmitter<string>();

  public deleteItem(id: string){
    return this.outputDeleteItem.emit(id)
  }
}
