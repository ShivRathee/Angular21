import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lifecycle } from '../lifecycle/lifecycle';
import { Highlight} from '../CustomDirective/highlight.directive';
import { Hover } from '../CustomDirective/hover';

@Component({
  selector: 'app-search',
  imports: [FormsModule, Lifecycle, Highlight, Hover],
  templateUrl: './search.html',
  styleUrl: './search.css',
})    
export class Search {
  value: string = '';
  inputValue: string = '';
  destroyComponent: boolean = true;

  changeValue(event: any) {
    this.value = event.target.value;
  }


  @Output() textValue: EventEmitter<string> = new EventEmitter<string>();

  sendTextValue() {
    this.textValue.emit(this.value);  
  }

  onSubmit(input: any) {
    this.inputValue = input.value;
  }

  destroyLifecycleComponent() {
    this.destroyComponent = false;
  }

}
