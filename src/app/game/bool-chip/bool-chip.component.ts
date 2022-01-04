import { Component, ViewChild, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bool-chip',
  templateUrl: './bool-chip.component.html',
  styleUrls: ['./bool-chip.component.scss'],
})
export class BoolChipComponent implements AfterViewInit, OnChanges {

  @ViewChild('chip', {read: ElementRef}) chip: ElementRef
  @ViewChild('icon', {read: ElementRef}) icon: ElementRef
  @Input() color = 'primary'
  @Input() bool = true

  ngAfterViewInit() {
      this.setElementColor()
  }

  ngOnChanges() {
      if (this.chip) this.setElementColor()
  }

  setElementColor() {
    this.chip.nativeElement.style.backgroundColor = this.bool ? `var(--ion-color-${this.color}-shade)` : `var(--ion-color-${this.color}-tint)`
    this.chip.nativeElement.style.color = `var(--ion-color-${this.color}-contrast)`
  }

}
