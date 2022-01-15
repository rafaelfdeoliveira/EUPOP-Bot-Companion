import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { BotCardComponent } from './bot-card/bot-card.component';
import { CounterChipComponent } from './counter-chip/counter-chip.component';
import { BoolChipComponent } from './bool-chip/bool-chip.component';
import { FocusChipComponent } from './focus-chip/focus-chip.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GamePageRoutingModule
  ],
  declarations: [
    GamePage,
    BotCardComponent,
    CounterChipComponent,
    BoolChipComponent,
    FocusChipComponent
  ]
})
export class GamePageModule {}
