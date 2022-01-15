import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bot } from 'src/app/models/bot.model';

@Component({
  selector: 'app-bot-card',
  templateUrl: './bot-card.component.html',
  styleUrls: ['./bot-card.component.scss'],
})
export class BotCardComponent {

  @Input() bot: Bot
  @Output() botChange = new EventEmitter<Bot>()

  color = "eublue"
  focus = false
  availableManpower = false

  changeFocus(newFocus) {
    console.log(newFocus)
  }

  // toggleBoolProp(propertyName: string) {
  //   if (this[propertyName]) this[propertyName] = false
  //   else this[propertyName] = true
  // }

  getEUColor() {
    return 'eu' + this.bot.color
  }

  changeBPLeft(change: number) {
    console.log(change)
  }

  changeBPspent(change: number) {
    console.log(change)
  }

  changeInfluence(change: number) {
    console.log(change)
  }

  changeCardinals(change: number) {
    console.log(change)
  }

  changeAdminIdeas(change: number) {
    console.log(change)
  }

  changeDiploIdeas(change: number) {
    console.log(change)
  }

  changeMilIdeas(change: number) {
    console.log(change)
  }

  changeColonists(change: number) {
    console.log(change)
  }

  changeColonialClaims(change: number) {
    console.log(change)
  }


}