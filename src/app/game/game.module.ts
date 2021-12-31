import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamePage } from './game.page';

import { GamePageRoutingModule } from './game-routing.module';
import { BotCardComponent } from './bot-card/bot-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GamePageRoutingModule
  ],
  declarations: [GamePage, BotCardComponent]
})
export class GamePageModule {}
