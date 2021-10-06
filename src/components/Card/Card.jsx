import React, { Component } from 'react';
class Card extends Component {
    userScore = 0
    aiScore = 0
    constructor(props) {
        super(props);
        this.state = { 
            suits: ["Hearts", "Clubs", "Diamonds", "Spades"],
            value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            userCard: [],
            aiCard: []
         }
    }

    //Gets random suit and random value from the list in the classes state
    drawRandom = () => {
        let suit = this.state.suits[Math.floor(Math.random() * (4 - 0) + 0)]
        let value = this.state.value[Math.floor(Math.random() * 13)]
        let randomCard = [suit, value]
        return randomCard
    }

    getAICard = () => {
        let randCard = this.drawRandom()
        this.setState({
            aiCard: randCard
        })
        
    }

    getCard = () => {
        let userCard = this.drawRandom()
        this.setState({
            userCard: userCard
        })
        this.getAICard()
    }

    compareCards = () => {
        if (this.state.userCard[1] > this.state.aiCard[1]){
            this.userScore++;
        }else if (this.state.userCard[1] < this.state.aiCard[1]){
            this.aiScore++;
        }else {
            window.alert("The match was a tie")
        }
    }

    runGame = () => {
        this.getCard();
        this.compareCards();
        this.forceUpdate();
    }

    render() { 
        console.log(this.state.userCard)
        console.log(this.state.aiCard)

        return (
            <div className="row">
                <div className="col-lg-2">
                    <h1>User Score</h1>
                    <h3>{this.userScore}</h3>
                </div>
                <div className = "col-lg-8" align = "center">
                    <button onClick = {this.runGame}>Generate Card</button>
                    <h2>Player One Card(You): {this.state.userCard[1]} of {this.state.userCard[0]}</h2>
                    <h2>Player Two Card: {this.state.aiCard[1]} of {this.state.aiCard[0]}</h2>
                </div>
                <div className="col-lg-2">
                    <h1>AI Score</h1>
                    <h3>{this.aiScore}</h3>
                </div>
            </div>
         );
    }
}
 
export default Card ;