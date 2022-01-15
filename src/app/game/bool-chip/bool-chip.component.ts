import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bool-chip',
  templateUrl: './bool-chip.component.html',
  styleUrls: ['./bool-chip.component.scss'],
})
export class BoolChipComponent {

  @Input() color = 'tertiary'
  @Input() bool = true
  @Output() boolChange = new EventEmitter<boolean>()

  emitBoolChange() {
    if (this.bool) this.boolChange.emit(false)
    else this.boolChange.emit(true)
  }

  getBackgroundColor() {
    return this.bool ? `var(--ion-color-${this.color}-shade)` : `var(--ion-color-${this.color}-tint)`
  }

  getChipStyle() {
    return `{'backgroundColor': getBackgroundColor(), 'color': 'var(--ion-color-${this.color}-contrast)'}`
  }

  // [style.backgroundColor]="getBackgroundColor()" style.color="var(--ion-color-{{color}}-contrast)"

}
