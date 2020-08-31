import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ScoreComponent } from './score/score.component';
import { ChoiceComponent } from './choice/choice.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, ScoreComponent, ChoiceComponent, RulesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
