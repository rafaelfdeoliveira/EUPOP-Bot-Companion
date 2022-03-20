export class BotCard {
    id: number
    firstAction: FirstBotAction
    secondAction: SecondBotAction = ''
    warArction: WarAction = ''
    bpCost: number
    usedAction: FirstBotAction | SecondBotAction = ''
    
    constructor(id: number) {
        if (id < 1 || id > 24) throw new Error('Invalid BotCard ID')
        this.id = id
        if (id === 1) this.firstAction = 'event'
        else if ([2, 3, 4, 5].includes(id)) this.firstAction = 'military'
        else if ([6, 7, 8].includes(id)) this.firstAction = 'diplomacy'
        else if ([9, 10].includes(id)) this.firstAction = 'naval'
        else if (id === 11) this.firstAction = 'explore'
        else if (id === 12) this.firstAction = 'colonize'
        else if ([13, 20, 21, 22, 23].includes(id)) this.firstAction = 'unrest'
        else if (id == 14) this.firstAction = 'papal curia'
        else if ([15, 16, 17, 18, 19].includes(id)) this.firstAction = 'convert'
        else if (id === 24) this.firstAction = 'idea'

        if ([13, 14].includes(id)) this.secondAction = 'spy'
        else if (id === 15) this.secondAction = 'papal curia'
        else if ([16, 20].includes(id)) this.secondAction = 'focus (eco.)'
        else if ([17, 21].includes(id)) this.secondAction = 'focus (exp.)'
        else if ([18, 22].includes(id)) this.secondAction = 'focus (pol.)'
        else if ([19, 23].includes(id)) this.secondAction = 'focus (war.)'

        if ([8, 12, 15].includes(id)) this.warArction = 'military'
        else if (id === 11) this.warArction = 'naval'
        else if ([13, 14].includes(id)) this.warArction = 'spy'

        if (id === 1) this.bpCost = 0
        else if ([2, 3, 9, 16, 17, 18, 19, 20, 21, 22, 23].includes(id)) this.bpCost = 1
        else if ([4, 6, 10, 11, 13, 14].includes(id)) this.bpCost = 2
        else this.bpCost = 3
    }
}

type FirstBotAction = 'event' | 'military' | 'diplomacy' | 'naval' | 'explore' | 'colonize' | 'unrest' | 'papal curia' | 'convert' | 'idea'
type SecondBotAction = '' | 'spy' | 'papal curia' | 'focus (eco.)' | 'focus (exp.)' | 'focus (pol.)' | 'focus (war.)'
type WarAction = '' | 'military' | 'naval' | 'spy'