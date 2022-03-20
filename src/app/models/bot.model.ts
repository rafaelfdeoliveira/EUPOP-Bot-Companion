import { BotDeck } from './bot-deck.model'

export class Bot {
    nation: BotNation
    color: EuColor
    religion: Religion
    botDeck: BotDeck
    bpLeft = 9
    bpSpent = 0
    influence = 0
    cardinals = 0
    availableManpower = true
    focus: Focus = false
    enemyInside = false
    occupied = false
    atWar = false
    canSiege = false
    pickedEvent = false
    passedRound = false
    adminIdeas = 0
    diploIdeas = 0
    milIdeas = 0
    QFTNW = false
    colonists = 0
    colonialClaims = 0

    constructor(nation: BotNation, color: EuColor = null, religion: Religion = null) {
        this.nation = nation
        if (color) this.color = color
        else if (['austria', 'novgorod'].includes(nation)) this.color = 'euwhite'
        else if (['castile', 'muscovy', 'mamluks', 'bohemia', 'netherlands'].includes(nation)) this.color = 'euyellow'
        else if (['england', 'denmark', 'aragon', 'hungary', 'lithuania', 'venice'].includes(nation)) this.color = 'eured'
        else if (['france', 'sweden', 'brandenburg'].includes(nation)) this.color = 'eublue'
        else if (['ottmans', 'portugal'].includes(nation)) this.color = 'eugreen'
        else this.color = 'eupurple'

        if (religion) this.religion = religion
        else if (['muscovy', 'novgorod'].includes(nation)) this.religion = 'orthodox'
        else if (['ottomans', 'mamluks'].includes(nation)) this.religion = 'muslim'
        else this.religion = 'catholic'
    }
}

export type BotNation = 'austria' | 'castile' | 'england' | 'france' | 'muscovy' | 'ottomans' | 'poland' | 'denmark' | 'sweden' | 'portugal' | 'burgundy' | 'aragon' | 'hungary' | 'lithuania' | 'novgorod' | 'mamluks' | 'bohemia' | 'brandenburg' | 'venice' | 'netherlands'
type EuColor = 'euyellow' | 'eublue' | 'eured' | 'euwhite' | 'eugreen' | 'eupurple'
type Religion = 'catholic' | 'counter-reformed' | 'protestant' | 'orthodox' | 'muslim'
type Focus = false | 'economic' | 'administrative' | 'diplomatic' | 'military'