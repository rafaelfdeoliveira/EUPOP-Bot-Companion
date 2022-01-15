export class Bot {
    nation: string
    color: euColor
    religion: Religion
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

    constructor(nation: string, color: euColor, religion: Religion) {
        this.nation = nation
        this.color = color
        this.religion = religion
    }
}

type euColor = 'euyellow' | 'eublue' | 'eured' | 'euwhite' | 'eugreen' | 'eupurple'
type Religion = 'catholic' | 'protestant' | 'orthodox' | 'muslim'
type Focus = false | 'economic' | 'administrative' | 'diplomatic' | 'military'