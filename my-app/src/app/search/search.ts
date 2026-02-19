import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  value: string = '';

  // changeValue(event: any) {
  //   this.value = event.target.value;
  // }


  @Output() textValue: EventEmitter<string> = new EventEmitter<string>();

  sendTextValue() {
    this.textValue.emit(this.value);  
  }

}
