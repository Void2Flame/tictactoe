var player = [];
var computer = [];
var playerCount=0;
var stopGame = false;

$('.ui-loader').find('h1').remove();

$(".box").on("vclick", function () {

    if(!stopGame)
    {
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
        checkWinner(player, true);
        checkWinner(computer, false);
    }
    
});

$(".button").on("click", function () {

    $(".button").addClass("display");
    $("h2").text("Tic tac toe");
    $("p").text("This game is called 'Tic Tac toe' where the goal is to be the first person to get 3 boxes lining up. You will be going against an randomized computer in this game.");
    player=[];
    computer=[];
    playerCount=0;
    stopGame = false;
    removeClassesFromBoxes();

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

function checkWinner(array, whichPlayer) {

    if((array.includes(1) && array.includes(2) && array.includes(3)) || (array.includes(4) && array.includes(5) && array.includes(6)) || (array.includes(7) && array.includes(8) && array.includes(9)))
    {
        console.log("Row");
        return Victory(whichPlayer);
    }
 
    else if((array.includes(1) && array.includes(4) && array.includes(7)) || (array.includes(2) && array.includes(5) && array.includes(8)) || (array.includes(3) && array.includes(6) && array.includes(9)))
    {
         
        console.log("Column");
         Victory(whichPlayer);
    }

    else if((array.includes(1) && array.includes(5) && array.includes(9)) || (array.includes(3) && array.includes(5) && array.includes(7)))
     {
        console.log("Cross");
        return Victory(whichPlayer);
    }

}

function Victory(player) {

    if(player===true){
        $("h2").text("You win! 👑");
        $("p").text("To restart the game press the under the boxes.");
        $(".button").removeClass("display");
        stopGame=true;
    }
    else {
        $("h2").text("Computer wins! 🤖");
        $("p").text("To restart the game press the under the boxes.");
        $(".button").removeClass("display");
        stopGame=true;
    }
}

function compareNumbers(a, b) {
    return a - b;
  }

  function removeClassesFromBoxes () {

    for(var i=0; i<9; i++){
        $("#"+(i+1)).removeClass("O");
        $("#"+(i+1)).removeClass("X");
    }
  }
