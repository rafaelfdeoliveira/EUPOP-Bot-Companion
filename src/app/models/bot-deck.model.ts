import { BotCard } from './bot-card.model'
import { shuffle } from 'lodash'

export class BotDeck {
    deck: BotCard[]
    discardedCards: BotCard[]

    constructor(excludedCardsIds: number[]) {
        this.prepareNewDeck(excludedCardsIds)
    }

    prepareNewDeck(excludedCardsIds: number[]): void {
        excludedCardsIds.forEach((id) => {
            if (id < 1 || id > 24) throw new Error('Invalid BotCard ID')
        })
        this.deck = []
        this.discardedCards = []
        for (let i = 1; i <= 24; i++) {
            if (!excludedCardsIds.includes(i)) {
                this.deck.push(new BotCard(i))
            }
        }
        this.deck = shuffle(this.deck)
    }

    prepareForNewRound(): void {
        const EventAndIdeaCards = this.discardedCards.filter((card) => [1, 24].includes(card.id))
        const focusActions = ['focus (eco.)', 'focus (exp.)', 'focus (pol.)', 'focus (war.)']
        this.discardedCards = this.discardedCards.filter((card) => ![1, 24].includes(card.id) && !focusActions.includes(card.usedAction))
        this.discardedCards = shuffle(this.discardedCards)
        this.discardedCards.splice(Math.trunc(this.discardedCards.length / 2))
        this.deck = shuffle(this.deck.concat(EventAndIdeaCards, this.discardedCards))
        this.deck.forEach((card) => card.usedAction = '')
        this.discardedCards = []
    }
    
}