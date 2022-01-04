import { Component, AfterViewInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter-chip',
  templateUrl: './counter-chip.component.html',
  styleUrls: ['./counter-chip.component.scss'],
})
export class CounterChipComponent implements AfterViewInit, OnChanges {

  @Input() color = "primary"
  @Output() change = new EventEmitter<number>()
  @ViewChild("chip", {read: ElementRef}) chip: ElementRef

  ngAfterViewInit() {
    this.setElementColor()
  }

  ngOnChanges() {
      if (this.chip) this.setElementColor()
  }

  setElementColor() {
    this.chip.nativeElement.style.backgroundColor = `var(--ion-color-${this.color}-shade)`
    this.chip.nativeElement.style.color = `var(--ion-color-${this.color}-contrast)`
  }

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