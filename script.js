// Global Variables to interate with the doors. 
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// Amount of Doors in the Game 
let numClosedDoors = 3; 

// Doors Opened 
let openDoor1 = null;
let openDoor2 = 'segundo teste';
let openDoor3 = 'teste';

// New path contain the opened door
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'

// Path contain beach img.
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'

// Path contain space img. 
const  spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'


// Function to randomly change the door the will have the Robot 
const randomDoorGenerator = () => { 
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    
    if (choreDoor === 0){ 
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;

    } else if(choreDoor === 1) { 
        openDoor2 = botDoorPath; 
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;

    } else if(choreDoor ===2 ) {
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    } else { 
        return 'Something gone Wrong'
    };
};

randomDoorGenerator(); 

// Functions to open the doors. 
doorImage1.onclick = () => { 
    doorImage1.src = openDoor1;
};

doorImage2.onclick = () => { 
    doorImage2.src = openDoor2;
};

doorImage3.onclick = () => { 
    doorImage3.src = openDoor3;
};

