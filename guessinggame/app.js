let max = prompt("enter a maximum number");

let random = Math.floor(Math.random()*max)+1;

let n = prompt("guess the number");

while(true){
    if(n == "quit"){
        console.log("quitting");
        break;
    }
    if(n == random){
        console.log("your guess is right");
        prompt("you guessed it right!!!!");
        break;
    }else if(n < random){
        n = prompt("number is less than guessed number");

    }else if(n > random){
        n = prompt("number is more than guessed number");
    }
}