// we are goining to build basic game tic toc toe 
// we are going to use html, css and javascript for this game

let boxs=document.querySelectorAll('.box');
let reset_btn=document.querySelector('#reset-btn');
playerTurn=document.querySelector('.player-turn');

let turn0=true;
let no_of_games_win=0;
let no_of_games_draw=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxs.forEach(box=>{
    box.addEventListener('click',()=>{
       if(turn0){
           box.innerText='0';
            playerTurn.innerText='Player X turn';
           turn0=false;
            checkWinner();
       }else
         {
              box.innerText='X';
              playerTurn.innerText='Player O turn';
                turn0=true; 
                checkWinner();
         }
         box.disabled=true;
    });
});

reset_btn.addEventListener('click',()=>{
    boxs.forEach(box=>{
        box.innerText='';
        playerTurn.innerText='Lets play New Game';
        box.disabled=false; 
        turn0=true;
        boxs.forEach(box=>box.classList.remove('winner'));  // remove winner class from all boxes if game is reseted.
    });
}); 

checkWinner=()=>{
    winPatterns.forEach((pattern)=>{
        const box0InnerText=boxs[pattern[0]].innerText;
        const box1InnerText=boxs[pattern[1]].innerText;
        const box2InnerText=boxs[pattern[2]].innerText;

        if(box0InnerText && box0InnerText===box1InnerText && box0InnerText===box2InnerText){
            
            
                playerTurn.innerText='Congragulations Player '+box0InnerText+' wins';
                boxs.forEach(box=>box.disabled=true);
        }
    });
}
    


