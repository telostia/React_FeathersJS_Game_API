import React, { PureComponent } from 'react'

class GameLogic extends PureComponent {

  bigBang(playerPickOne, playerPickTwo) {
    const playerChoices = ['paper', 'rock', 'lizard', 'spock', 'scissors'];
    const result = [' ties with ', ' beats ', ' loses to '];

    let choice1 = playerChoices.indexOf(playerPickOne),
    choice2 = playerChoices.indexOf(playerPickTwo),
    difference = choice2 - choice1;
    if (difference < 0) {
      difference += playerChoices.length;
    }
    while (difference > 2) {
      difference -= 2;
    }
    return playerPickOne + result[difference] + playerPickTwo;
  }

  render() {
    return (
      <div>
        <div>{ this.bigBang('spock', 'scissors') }</div>
        <div>{ this.bigBang('spock', 'paper') }</div>
        <div>{ this.bigBang('spock', 'rock') }</div>
        <div>{ this.bigBang('spock', 'lizard') }</div>
        <div>{ this.bigBang('spock', 'spock') }</div>
      </div>
    )
  }
}



export default GameLogic
