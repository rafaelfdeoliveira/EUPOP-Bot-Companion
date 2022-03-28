import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-chip',
  templateUrl: './counter-chip.component.html',
  styleUrls: ['./counter-chip.component.scss'],
})
export class CounterChipComponent {

  @Input() color = "tertiary"
  @Output() change = new EventEmitter<-1 | 1>()

  isClickOnFirstHalf(ev: MouseEvent) {
    const el = ev.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    if (ev.clientX - rect.left < rect.width / 2) return true
    return false
  }

  emitChange(ev: MouseEvent) {
    if (this.isClickOnFirstHalf(ev)) this.change.emit(-1)
    else this.change.emit(1)
  }

}