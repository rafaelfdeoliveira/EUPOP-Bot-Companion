import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss']
})
export class GamePage {

  constructor(private gameService: GameService) {
    if (!this.gameService.game) this.gameService.createNewGame()
  }

  public get age() {
    return this.gameService.game.age;
  }

  changeIA(change: -1 | 1) {
    this.gameService.changeIA(change)
  }

}