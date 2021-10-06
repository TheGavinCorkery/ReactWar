import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            suits: ["Hearts", "Clubs", "Diamonds", "Spades"],
            value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            userCard: [],
            aiCard: [],
            score: []
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

    compareCards = (userCard, aiCard, score) => {
        if (userCard[1] > aiCard[1]){
            score[0]++
        }else if (userCard[1] < aiCard[1]){
            score[1]++
        }else {
            window.alert("The match was a tie")
        }
        return score
    }

    runGame = (event) => {
        let score = [0,0]
        let userCard = this.getCard();
        let aiCard = this.getCard();
        score = this.compareCards(userCard, aiCard, score);
        this.setState({
            userCard: userCard,
            aiCard: aiCard,
            score: score
        })
    }

    render() { 
        return (
            <div className="row">
                <div className="col-lg-2">
                    <h1>User Score</h1>
                    <h3>{this.state.score[0]}</h3>
                </div>
                <div className = "col-lg-8" align = "center">
                    <button onClick = {this.runGame}>Run Match</button>
                    <h2>Player One Card(You): {this.state.userCard[1]} of {this.state.userCard[0]}</h2>
                    <h2>Player Two Card: {this.state.aiCard[1]} of {this.state.aiCard[0]}</h2>
                </div>
                <div className="col-lg-2">
                    <h1>AI Score</h1>
                    <h3>{this.state.score[1]}</h3>
                </div>
            </div>
         );
    }
}
 
export default Card ;