// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerAP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    const arcaneScepterButton = document.querySelector('.arcane-scepter');
    const entangleButton = document.querySelector('.entangle');
    const dragonBladeButton = document.querySelector('.dragon-blade');
    const starFireButton = document.querySelector('.star-fire');

    arcaneScepterButton.addEventListener('click', function(){
        console.log("clicked septar");
        playerAttacks(12, 14);
        console.log(playerAP, fungusHP)
    });

    entangleButton.addEventListener('click', function(){
        console.log("clicked entangle");
        playerAttacks(23, 9)
        console.log(playerAP, fungusHP)
    });

    dragonBladeButton.addEventListener('click', function(){
        console.log("clicked dragon");
        playerAttacks(38, 47)
        console.log(playerAP, fungusHP)
    });

    starFireButton.addEventListener('click', function(){
        console.log("clicked star");
        playerAttacks(33, 25)
        console.log(playerAP, fungusHP)
    });

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

// Need to make a function handle the attacks 
// **HP and AP can't be negative - if statement
// IF hp is 0 you win - replace walk class with dead class 

function playerAttacks(apCost, hpDamage) {
    // Stops players from attacking if they dont have the AP
    if (playerAP >= apCost) {
        // Updates the state/global variables
        playerAP -= apCost;
        fungusHP -= hpDamage;
    }
    // Sets the win condition for the player
    if (fungusHP === 0) {
        alert("The monster is dead you saved the world ❤️")
        return;
    }
}


// Need to make a function that updates the DOM 
// IF ap is 0 monster wins - rplace walk with jump give all buttons a disabled atrribue
// updates the text above the buttons and functions
