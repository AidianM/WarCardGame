let playerScore = 0;
let computerScore =0;
let playerDeck = 26;
let computerDeck = 26;
//THIS BEGINS DOM WORK
let playerCardDisplay = document.getElementById("playerCard").innerText;


//THIS ENDS DOM WORK
function gameRun(){

let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// array of cards, 2-10 represent the corresponding playing card, 11 is J, 12 is Q, 13 is K, 14 is A.
let cardSuits = ['♣', '♥', '♠', '◆'];
// array of suits
 
function getCard(min, max) {
  min = Math.ceil(2);
  max = Math.floor(14);
  return Math.floor(Math.random() * (14 - 2 + 1) + 2);
}
//random integer function that generates an integer between 2-14

function getSuit(){
	let random = Math.floor((Math.random() * cardSuits.length));
    let suit=cardSuits[random]
    return suit;
}
//function that finds a random suit from above array


let playerFace = getCard();
let computerFace = getCard();
let playerSuit = getSuit();
let computerSuit = getSuit();


//assigns each player a hand using getHand and getSuit functions above

function compare(playerFace,computerFace){
//fixing the card#11-14 display issue:

console.log("Player 1's card is " + playerFace + " of " + playerSuit + "\n" + "Player 2's card is a: " + computerFace + " of " + computerSuit);
    if (playerFace == computerFace){
        document.getElementById("warDeclaration").innerText ="+++++++++++\nIt's a War!\n+++++++++++";
        let playerWar = getCard();
        let computerWar = getCard();
        if (playerWar > computerWar){
            playerScore+=4;
            computerDeck-=4;
            document.getElementById("roundResults").innerText = "You won the War!";
        } else if (playerWar<computerWar){
            computerScore+=4;
            playerDeck-=4;
            document.getElementById("roundResults").innerText = "The Computer won the war!";
        } else {
            document.getElementById("roundResults").innerText = "We're declaring peace instead of a double-War.";
        }
    } else if (playerFace > computerFace){
        document.getElementById("warDeclaration").innerText =" \n \n ";
    playerScore++;
    computerDeck --;
    document.getElementById("roundResults").innerText ="You won the round! \n -";
    } else {
        document.getElementById("warDeclaration").innerText =" \n \n ";

    computerScore++;
    playerDeck--;
    document.getElementById("roundResults").innerText ="The computer won the round!";
    }

//fixing 11-14 display values:
    let playerFaceTrue = playerFace;
    let computerFaceTrue = computerFace;

    switch (playerFaceTrue){
        case 2:
        case 3:
        case 4: 
        case 5: 
        case 6: 
        case 7: 
        case 8: 
        case 9: 
        case 10: 
            playerFaceTrue = playerFace;
            break;
        case 11:
            playerFaceTrue = "J";
            break;
        case 12:
            playerFaceTrue = "Q";
            break;
        case 13:
            playerFaceTrue = "K";
            break;
        case 14:
            playerFaceTrue = "A";
            break;     
    }

    switch (computerFaceTrue){
        case 2:
        case 3:
        case 4: 
        case 5: 
        case 6: 
        case 7: 
        case 8: 
        case 9: 
        case 10: 
            computerFaceTrue = computerFace;
            break;
        case 11:
            computerFaceTrue = "J";
            break;
        case 12:
            computerFaceTrue = "Q";
            break;
        case 13:
            computerFaceTrue = "K";
            break;
        case 14:
            computerFaceTrue = "A";
            break;    
    }
//DOM Display work:

//Card Display Divs:
document.getElementById("playerCard").innerText = playerFaceTrue+playerSuit;
document.getElementById("computerCard").innerText = computerFaceTrue+computerSuit;
//Score Display Divs:
document.getElementById("playerScore").innerText = playerScore;
document.getElementById("computerScore").innerText = computerScore;

//Round Results div:
// document.getElementById("roundResults").innerText = XXX
// document.getElementById("roundResults").innerText = 


};



//Score Display Divs:


// function playRound(playerFace, computerFace){
//     let playerCard = getCard();
//     let computerCard = getCard();
//     let playerScore=0;
//     let computerScore=0;
//     compare(playerCard, computerCard);
//     console.log(result);
// }
//function that compares each hand value and determines which has higher value 

compare(playerFace, computerFace);
console.log(playerScore);
console.log(computerScore);
// function which logs the result
};


function resetGame(){
    playerScore = 0;
    computerScore = 0;
    //Card Face divs:
    document.getElementById("playerCard").innerText = "-";
    document.getElementById("computerCard").innerText = "-";
    //Score Display Divs:
    document.getElementById("playerScore").innerText = '-';
    document.getElementById("computerScore").innerText = '-';
};