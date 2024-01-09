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

// Made a function that handles the attacks

function playerAttacks(apCost, hpDamage) {
    // removes the ap cost and hpdamage from the state variable
    playerAP -= apCost;
    fungusHP -= hpDamage;
    // Player loses if AP is less than or = to 0
    if (playerAP <= 0) {
        playerAP = 0;
        alert("You have no more AP :-: the fungi win");
        //Player wins in fungus HP is less than or = to 0
    } else if (fungusHP <= 0) {
        fungusHP = 0;
        alert("You killed the fungus and saved the world!");
    } else {
        // if win or lose conditions aren't met then it update the DOM
        updateDOM()
    }
}


// Need to make a function that updates the DOM 
// updates the text above the buttons and fungus

function updateDOM() {
    // Sets the HP and AP text to the playerAP and fungusHP after attack
    document.querySelector('.ap-text').textContent = `${playerAP} AP`;
    document.querySelector('.hp-text').textContent = `${fungusHP} HP`;
}