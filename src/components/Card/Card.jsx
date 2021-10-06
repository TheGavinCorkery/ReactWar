import React, { Component } from 'react';
class Card extends Component {
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
        console.log(this.state.userCard)
        console.log(this.state.aiCard)
    }

    render() { 
        return ( 
            <div>
                <button onClick = {this.getCard}>Generate Card</button>
            </div>
         );
    }
}
 
export default Card ;