import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characarte.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [{
    name:'trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?:string):void {

    if(!id) return;
    this.onDelete.emit(id);

  }

}
