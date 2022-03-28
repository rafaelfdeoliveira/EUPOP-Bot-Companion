import { Bot, BotNation } from "./bot.model"

export class Game {
    age: 1 | 2 | 3 | 4 = 1
    round = 1
    papalController: BotNation | 'human' | 'NPR'
    emperor: BotNation | 'human' | 'NPR' = 'austria'
    IA: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 3
    lastTurn = false
    actionPhaseEnd = false
    passedPlayers: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 0
    humanPlayersNumber: 1 | 2 | 3 | 4 | 5
    botPlayers: Bot[]

    constructor({age, round, papalController, emperor, IA, humanPlayersNumber, botPlayers}: GameInput) {
        if (age) this.age = age
        if (round) this.round = round
        this.papalController = papalController
        if (emperor) this.emperor = emperor
        if (IA) this.IA = IA
        this.humanPlayersNumber = humanPlayersNumber
        this.botPlayers = botPlayers
    }
}

interface GameInput {
    age?: 1 | 2 | 3 | 4
    round?: number
    papalController: BotNation | 'human' | 'NPR'
    emperor?: BotNation | 'human' | 'NPR'
    IA?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    humanPlayersNumber: 1 | 2 | 3 | 4 | 5
    botPlayers: Bot[]
}