import { Injectable } from '@angular/core';
import { Bot } from '../models/bot.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  age: number
  round: number
  papalController: string
  IA: number
  lastTurn = false
  actionPhaseEnd = false
  difficulty: Difficulty
  passedPlayers = 0
  humanPlayersNumber: number
  botPlayers: Bot[]

  constructor() { }
}

type Difficulty = 'Easy' | 'Normal' | 'Hard' | 'Very Hard'
