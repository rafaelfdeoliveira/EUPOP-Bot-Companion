import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Focus } from '../game.page';

@Component({
  selector: 'app-focus-chip',
  templateUrl: './focus-chip.component.html',
  styleUrls: ['./focus-chip.component.scss'],
})
export class FocusChipComponent {

  @Input() color = 'primary'
  @Input() chipID: string
  @Input() focus: Focus = false
  @Output() focusChange = new EventEmitter<Focus>()
  @ViewChild('popover', {read: ElementRef}) popover: ElementRef

  getBackgroundColor() {
    switch (this.focus) {
      case false: return `var(--ion-color-${this.color}-tint)`
      case 'economic': return "var(--ion-color-euyellow)"
      case 'administrative': return "var(--ion-color-eugreen)"
      case 'diplomatic': return "var(--ion-color-eublue)"
      case 'military': return "var(--ion-color-eured)"
    }
  }

  getTextColor() {
    switch (this.focus) {
      case false: return `var(--ion-color-${this.color}-contrast)`
      case 'economic': return "var(--ion-color-euyellow-contrast)"
      case 'administrative': return "var(--ion-color-eugreen-contrast)"
      case 'diplomatic': return "var(--ion-color-eublue-contrast)"
      case 'military': return "var(--ion-color-eured-contrast)"
    }
  }

  emitFocus(newFocus: Focus) {
    this.focusChange.emit(newFocus)
    this.popover.nativeElement.dismiss()
  }

}