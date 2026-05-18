import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output});

try {
    const secret = Math.floor(Math.random() * (20)) + 1;
    let tries = 0;
    let guess = 0;

    console.log("Im thing about a number between 1-20");

    while (guess !== secret) {
        const text = await rl.question("Take a guess:");
        guess = parseInt(text, 10);

        tries = tries + 1;
        if(guess < 1 || guess > 20 ) {
            console.log("That number is out of range, try again");
        }
        else if( guess > secret) {
            console.log(" Guess is too high, try again");
        }
        else if(guess < secret) {
            console.log(" guess is too low, try again");
        }
        else{
            console.log("you got in with", tries, "tries!");
        }
    }
}
finally{ 
    rl.close();}
