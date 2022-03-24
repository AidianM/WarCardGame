
console.log("Player 1's card is a: " + playerFace + " of " + playerSuit + "\n" + "Player 2's card is a: " + computerFace + " of " + computerSuit);
if (playerFace == computerFace){
    let playerWar = getCard();
    let computerWar = getCard();
    if (playerWar > computerWar){
        playerScore+=4;
        computerDeck-=4;
        return result = playerWinWar;
    } else if (playerWar<computerWar){
        computerScore+=4;
        playerDeck-=4;
        return result = computerWinWar;
    } else {
        return result = armistice;
    }
} else if (playerFace > computerFace){
playerScore++;
computerDeck --;
return result = playerWinRound;
} else {
computerScore++;
playerDeck--;
return result = computerWinRound;
}
};


//assigns each player a hand using getHand function above

let playerScore = 0;
let computerScore =0;

// function compare(player1Hand,player2Hand){
// console.log("Player 1's card is a: " + player1Hand + " " + "Player 2's card is a: " + player2Hand);
//     if (player1Hand == player2Hand){
//     let result = "War!";
    
//   }
//   else if(player1Hand > player2Hand){
//         playerScore++;
//         return result =  "Player1 Won!";
//         }
//     else{
//         computerScore++
//         return result = "Player2 Won!";
//     }
// }

//adding WAR function to above compare();
function gameRun(){
    
    function buildDeck(){
        let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        // array of cards, 2-10 represent the corresponding playing card, 11 is J, 12 is Q, 13 is K, 14 is A.
        let cardSuits = ['♣', '♥', '♠', '◆'];
        let allCards = [];

        //concat a card from arrays:
        for (let i=0; i<cardSuits.length; i++){
            for (let j=0; j<cardValues.length; j++){
            let card = cardValues[i];
            let suit = cardSuits[j];
            allCards.push({card, suit});
            }
        };
        return allCards;
    };
    buildDeck();

    function drawCard(allCards){
        const random = Math.floor(Math.random()*51);
        let cardValue = allCards[random].card;
        let cardSuit = allCards[random].suit;
        console.log(cardValue+cardSuit);
    };
    drawCard();
// function getSuit(){
// 	var random = Math.floor((Math.random() * cardSuits.length));
//     var suit=cardSuits[random]
//     return suit;
// }
//function that finds a random suit from above array

//function to draw a random card:
function getCard(){
    let drawnCard = {
        0: cards[Math.floor(Math.random()*cards.length)],
        1: cardSuits[Math.floor(Math.random()*cardSuits.length)]
    };
    // // let cardFace = [Math.floor(Math.random()*13+1)];
    // let cardFace = cards[Math.floor(Math.random()*cards.length)];
    // let cardSuit = cardSuits[Math.floor(Math.random()*cardSuits.length)];
    // // drawnCard.push(cardFace).push(cardSuit);
    // drawnCard = cardFace[0]+cardSuit[0];
    return drawnCard.parseInt[0];
}

// function getHand(min, max) {
//   min = Math.ceil(2);
//   max = Math.floor(14);
//   return card =Math.floor(Math.random() * (14 - 2 + 1) + 2);
// }
// //random integer function that generates an integer between 2-14

let playerCard = getCard();
let computerCard = getCard();

function playRound(player1Hand, player2Hand){
    let playerCard = getCard();
    let computerCard = getCard();
    let playerScore=0;
    let computerScore=0;
    compare(playerCard, computerCard);
    console.log(result);
}
function compare(player1Hand,player2Hand, suit){
    console.log("Player 1's card is a: " + playerCard + " "+"Player 2's card is a: " + computerCard);

    if (player1Hand === player2Hand){
        return result = "WAR!";
    
    }
    else if(player1Hand[0] > player2Hand[0]){
        playerScore++;
        return result =  "Player1 Won!";
        }
    else{
        computerScore++;
        return result = "Player2 Won!";
    }

}

function showScore(){
    console.log(playerScore);
    console.log(computerScore);
}
// playRound();
// showScore();
}

function resetGame(){
    playerScore=0;
    computerScore=0;
};