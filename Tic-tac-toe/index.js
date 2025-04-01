var player = [];
var computer = [];
var playerCount=0;
var winner = false;

$(".box").on("click", function () {

    var randomNumber=0;
    var computerDone= false;
    if(isBoxTaken((Number(this.id))))
    {
        var playerChoice= (Number(this.id));
        player.push(playerChoice);
        player.sort(compareNumbers);
        addingimage(true, playerChoice);
        playerCount++;
        if(playerCount<5){
            while (!computerDone){
                randomNumber= Math.floor(Math.random()*9+1);
                computerDone=isBoxTaken(randomNumber);
            }
            computer.push(randomNumber);
            computer.sort(compareNumbers);
            addingimage(false, randomNumber);
        }     
    }
    winner=checkWinner(player);
    winner=checkWinner(computer);
});


function addingimage (player, number) {

    if (player===true){
        $("#"+number).addClass("O");
    }
    else
    {
        $("#"+number).addClass("X");
    }
    
}

function isBoxTaken (number) {
    for (var i=0; i<player.length; i++)
    {
        if (player[i]===number)
        {
            return false;
        }
    }
    for (var i=0; i<computer.length; i++){
        if (computer[i]===number)
            {
                return false;
            }
    }
    return true;

}

function checkWinner(array) {

    console.log(array);

    if((array.includes(1) && array.includes(2) && array.includes(3)) || (array.includes(4) && array.includes(5) && array.includes(6)) || (array.includes(7) && array.includes(8) && array.includes(9)))
    {
        console.log("Row");
        return true;
    }
 
    else if((array.includes(1) && array.includes(4) && array.includes(7)) || (array.includes(2) && array.includes(5) && array.includes(8)) || (array.includes(3) && array.includes(6) && array.includes(9)))
    {
         
        console.log("Column");
        return true;
    }

    else if((array.includes(1) && array.includes(5) && array.includes(9)) || (array.includes(3) && array.includes(5) && array.includes(7)))
     {
        console.log("Cross");
        return true;
    }

}

function Victory(player) {

}

function compareNumbers(a, b) {
    return a - b;
  }