import { Bot, BotNation } from "./bot.model"

export class Game {
    age: 1 | 2 | 3 | 4 = 1
    round: 1 | 2 | 3 | 4 = 1
    papalController: BotNation | 'human' | 'NPR'
    emperor: BotNation | 'human' | 'NPR' = 'austria'
    IA: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 3
    lastTurn = false
    actionPhaseEnd = false
    difficulty: Difficulty
    passedPlayers: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 0
    humanPlayersNumber: 1 | 2 | 3 | 4 | 5 | 6
    botPlayers: Bot[]

    constructor({age, round, papalController, emperor, IA, difficulty, humanPlayersNumber, botPlayers}: GameInput) {
        if (age) this.age = age
        if (round) this.round = round
        this.papalController = papalController
        if (emperor) this.emperor = emperor
        if (IA) this.IA = IA
        this.difficulty = difficulty
        this.humanPlayersNumber = humanPlayersNumber
        this.botPlayers = botPlayers
    }

    public passRound() {
        if (this.round === 4) {
            this.passAge()
            return
        }
        this.round++
        this.botPlayers = this.botPlayers.map((bot) => {
            bot.prepareNewRound(this.age, this.round)
            return bot
        })
    }

    private passAge() {
        if (this.age == 4) return
        this.round  = 1
        this.age++
        this.botPlayers = this.botPlayers.map((bot) => {
            bot.prepareNewAge(this.age)
            return bot
        })
    }
}

type Difficulty = 'Easy' | 'Normal' | 'Hard' | 'Very Hard'

interface GameInput {
    age?: 1 | 2 | 3 | 4
    round?: 1 | 2 | 3 | 4
    papalController: BotNation | 'human'
    emperor?: BotNation | 'human' | 'NPR'
    IA?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    difficulty: Difficulty
    humanPlayersNumber: 1 | 2 | 3 | 4 | 5 | 6
    botPlayers: Bot[]
}