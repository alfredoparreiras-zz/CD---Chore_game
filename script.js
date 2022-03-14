// Global Variables to interate with the doors. 
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

let currentlyPlaying = true; 

// Amount of Doors in the Game 
let numClosedDoors = 3; 

// Doors Opened 
let openDoor1 = null;
let openDoor2 = null;
let openDoor3 = null;

// New path contain the opened door
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'

// Path contain beach img.
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'

// Path contain space img. 
const  spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'


// Function to check if the door contains the Bot 

const isBot = (door) => { 
    if(door.src === botDoorPath) { 
        return true;
    } else { 
        return false; 
    }
}


// Function to require that all ports are clicked
const isClicked = (door) => { 
    
    if (door.src  === closedDoorPath ) { 
        return false; 
    } else { 
        return true; 
    }
}

//Function to determine Victory
function playDoor(door) { 
    numClosedDoors = numClosedDoors - 1;

    if(numClosedDoors === 0 ){ 
        gameOver('win')
    } else if ( isBot(door) === true ){ 
        gameOver('lose')
    } else { 

    }
}

// Function to randomly change the door the will have the Robot 
const randomDoorGenerator = () => { 
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    
    if (choreDoor === 0) { 
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;

    } else if(choreDoor === 1) { 
        openDoor2 = botDoorPath; 
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;

    } else if(choreDoor === 2 ) {
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    } else { 
        return 'Something gone Wrong'
    };
};


// Functions to open the doors. 
doorImage1.onclick = () => { 
    if (isClicked(doorImage1) === false && currentlyPlaying === true) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
};

doorImage2.onclick = () => { 
    if(isClicked(doorImage2) === false && currentlyPlaying === true){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
};

doorImage3.onclick = () => { 
    if(isClicked(doorImage3) === false && currentlyPlaying === true){ 
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    };
};


startButton.onclick = () => { 
    startRound()
}


// Reset Function 
function startRound() { 
    
    numClosedDoors = 0; 
    startButton.innerHTML = 'Good Luck!'
    currentlyPlaying = true; 
}

// GameOver Function 

function gameOver(status) { 
    if(status === 'win'){ 
        startButton.innerHTML = 'You win! Play again?'; 
    } else if(status === 'lose'){ 
        startButton.innerHTML = 'Game Over! Play Again! '
    }; 

    currentlyPlaying = false ; 
}


// Calling the Generator Function 
randomDoorGenerator(); 
