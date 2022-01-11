let doorImage1 =document.getElementById("door_a");
let doorImage2 =document.getElementById("door_b");
let doorImage3 =document.getElementById("door_c");
let startButton =document.getElementById("start");
let flyDoorPath= "findFly.png"
let oceanDoorPath= "ocean.png"
let forestDoorPath= "forest.png"
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors=3;
playDoor();
let closedDoorPath="door_closed.png"



doorImage1.addEventListener("click",function () {
    if (isClicked(openDoor1)) {
        doorImage1.src=openDoor1
        playDoor();
        
    }
  
})


doorImage2.addEventListener("click",function () {

    if (isClicked(openDoor2)) {
        doorImage2.src=openDoor2
        playDoor();
        
    }

})

doorImage3.addEventListener("click",function () {
    if (isClicked(openDoor3)) {
        doorImage3.src=openDoor3
        playDoor();
        
    }
})

randomFindDoorGenerator=() => {
    let findDoor=Math.floor(Math.random()*numClosedDoors)
if (findDoor===0) {
    openDoor1=flyDoorPath
    openDoor2=oceanDoorPath
    openDoor3=forestDoorPath
    
}else if (findDoor===1) {
    openDoor2=flyDoorPath
    openDoor1=oceanDoorPath
    openDoor3=forestDoorPath
    
}else {
    openDoor3=flyDoorPath
    openDoor1=oceanDoorPath
    openDoor2=forestDoorPath
}
}

randomFindDoorGenerator()

function isClicked(door) {
    if (door===closedDoorPath) {
        return false;
        
    }else{
        return true;
    }
    
}

function playDoor() {
    numClosedDoors --;
    
    if ( numClosedDoors===0) {
        gameOver(isFly())
        
    }
}

function gameOver(status) {
    if (status === "win") {
        startButton.innerHTML = 'You win! Play again?';
      }
      
    
}



function isFly(door) {
   if (door===flyDoorPath) {
       return "lose"
       
   }else {
       return "win";
   }
}