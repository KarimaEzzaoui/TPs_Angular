// radio-buttons.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css']
})
export class RadioButtonsComponent {
  @Input() selectedColor: string = ''; // Initialize the property

  @Output() colorChanged = new EventEmitter<string>();

  onRadioChange(color: string) {
    this.colorChanged.emit(color);
  }
}
 