import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  playerChoice: number;
  houseChoice: number;
  ties: number = 0;
  wins: number = 0;
  losses: number = 0;

  constructor() {}

  ngOnInit(): void {}

  startGame() {}

  checkWin() {
    if (this.playerChoice === this.houseChoice) {
      this.ties++;
      console.log('Tie! House choice: ' + this.houseChoice);
    } else if ((this.playerChoice - this.houseChoice + 3) % 3 === 1) {
      this.wins++;
      console.log('Win! House choice: ' + this.houseChoice);
    } else {
      this.losses++;
      console.log('Lost! House choice: ' + this.houseChoice);
    }
  }

  onClick(value: string) {
    this.playerChoice = +value;
    this.houseChoice = Math.floor(Math.random() * 3);

    setTimeout(() => {
      this.checkWin();
    }, 2000);
  }
}
