import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss']
})
export class GamePage {

  constructor(private game: GameService) {}

  changeIA(change: number) {
    this.game.IA += change
    console.log(this.game.IA)
  }

}