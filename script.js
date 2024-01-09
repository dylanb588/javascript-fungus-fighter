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
    });

    entangleButton.addEventListener('click', function(){
        console.log("clicked entangle");
    });

    dragonBladeButton.addEventListener('click', function(){
        console.log("clicked dragon");
    });

    starFireButton.addEventListener('click', function(){
        console.log("clicked star");
    });

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()