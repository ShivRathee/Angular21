import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() all:number = 0;
  @Input() india:number = 0;
  @Input() others:number = 0;

  selectedRadioButton : string = 'All';

  @Output()
  filterRadioButtonSelectedChange: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChange() {
    this.filterRadioButtonSelectedChange.emit(this.selectedRadioButton);
  }

}
