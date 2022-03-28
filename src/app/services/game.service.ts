import { Injectable } from '@angular/core';
import { Bot } from '../models/bot.model';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: Game

  public createNewGame() {
    this.game = new Game({
      age: 1,
      round: 1,
      papalController: 'austria',
      emperor: 'austria',
      IA: 3,
      humanPlayersNumber: 2,
      botPlayers: [new Bot('austria'), new Bot('castile')]
    })
  }

  public passRound() {
    this.game.round++
    this.game.botPlayers = this.game.botPlayers.map((bot) => {
        this.prepareBotForNewRound(bot)
        return bot
    })
  }

  public passAge() {
      if (this.game.age == 4) return
      this.game.round  = 1
      this.game.age++
      this.game.botPlayers = this.game.botPlayers.map((bot) => {
          this.prepareBotForNewAge(bot)
          return bot
      })
  }

  public changeIA(change: -1 | 1) {
    if ((change === -1 && this.game.IA === 0) || (change === 1 && this.game.IA === 6)) return
    this.game.IA += change
  }

  private prepareBotForNewRound(bot: Bot) {

  }

  private prepareBotForNewAge(bot: Bot) {

  }
}