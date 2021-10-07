import React, { Component } from 'react';
import Score from '../Score/Score';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            suits: ["Hearts", "Clubs", "Diamonds", "Spades"],
            value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            userCard: [],
            aiCard: [],
            userWins: 0,
            aiWins: 0,
         }
    }

    //Gets random suit and random value from the list in the classes state
    drawRandom = () => {
        let suit = this.state.suits[Math.floor(Math.random() * (4 - 0) + 0)]
        let value = this.state.value[Math.floor(Math.random() * 13)]
        let randomCard = [suit, value]
        return randomCard
    }

    getCard = () => {
        let randomCard = this.drawRandom()
        return randomCard
    }

    compareCards = (userCard, aiCard) => {
        let winner = ""
        if (userCard[1] > aiCard[1]){
            winner = "userWins"
        }else if (userCard[1] < aiCard[1]){
            winner = "aiWins"
        }else {
            
        }
        return winner
    }

    runMatch = () => {
        let userCard = this.getCard();
        let aiCard = this.getCard();
        let winner = this.compareCards(userCard, aiCard);
        if (winner === "userWins") {
            this.setState({
                userCard: userCard,
                aiCard: aiCard,
                userWins: this.state.userWins +  1
            })
        }else if (winner === "aiWins"){
            this.setState({
                userCard: userCard,
                aiCard: aiCard,
                aiWins: this.state.aiWins +  1
            })
        }else{
            this.setState({
                userCard: userCard,
                aiCard: aiCard,
            })
        }
    }

    runGame = () => {
        
        if(this.state.userWins < 5 && this.state.aiWins < 5){
            this.runMatch()
        }
    }

    render() { 
        return (
            <div className="row">
                <div className="col-lg-2">
                    <h1>User Score</h1>
                    <h3>{this.state.userWins}</h3>
                </div>
                <div className = "col-lg-8" align = "center">
                    
                    <h2>Player One Card(You): {this.state.userCard[1]} of {this.state.userCard[0]}</h2>
                    <h2>Player Two Card: {this.state.aiCard[1]} of {this.state.aiCard[0]}</h2>
                    <button onClick = {() => this.runGame()} id = "runGame">Run Match</button>
                </div>
                <div className="col-lg-2">
                    <h1>AI Score</h1>
                    <h3>{this.state.aiWins}</h3>
                </div>
            </div>
         );
    }
}
 
export default Card ;