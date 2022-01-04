import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-card',
  templateUrl: './bot-card.component.html',
  styleUrls: ['./bot-card.component.scss'],
})
export class BotCardComponent {

  color = "eublue"

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