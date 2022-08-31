console.log("Ze VCS is running!!");

// logic control variables
let msgCounter = 0;
let firstSelect = true;
let firstAssign = true;

// buttons
let trainingMsg = document.getElementById("trainingMsg");
let msgArray = ["Welcome to the radio assignment tutorial, this is a very quick one to teach you how to assign a radio from the Radio tab. Click here when ready.", "In the centre panel we have all the available radios. Insecure radios are in red, and secure radios in green. Click to continue.", "On the left we have slots into which you can assign your radios.", "First up, please select a radio to assign, it will then turn gold to show it is selected.", 
"Now click a slot on the left to assign the radio too.", "Well done, that's all there is to this tutorial. The radio you selected would now be available on the Main panel. Click Home to return to the menu."];
trainingMsg.onclick=function() {msgIterate()};

let centreContainer=document.getElementById("centreContainer");
let home = document.getElementById("homeButton");

//all the middle panel radio select functionality

let selRadio = '';

let insColor = "rgba(184, 0, 0, 0.897)";
let secColor = "rgba(2, 180, 2, 0.897)";   
const radios = document.querySelectorAll('.insecSelectRadioButton, .selectRadioButton');
radios.forEach(beDisabled);

function beDisabled(radio){
    radio.disabled = true;
}

function dontBeDisabled(radio){
    radio.disabled = false;
}


function resetColor(thing){
    if(thing.className == "insecSelectRadioButton"){
        thing.style.backgroundColor = insColor;
    }
    if(thing.className == "selectRadioButton"){
        thing.style.backgroundColor = secColor;
    }
}
for (const radio of radios) {
    radio.addEventListener('click', function processClick() {
        radios.forEach(resetColor);
        radio.style.backgroundColor="rgba(224, 192, 9, 0.897)";
        selRadio = radio;
        if(firstSelect == true){
            msgCounter++;
            trainingMsg.innerHTML = msgArray[msgCounter];
            firstSelect = false;
        }
    })
}

// the functionality of the left container's radio slots.

const slots = document.querySelectorAll('.radioButton');

for (const slot of slots) {
    slot.addEventListener('click', function processClick() {
        radios.forEach(resetColor);
        slot.style.backgroundColor= selRadio.style.backgroundColor;
        slot.innerHTML = selRadio.innerHTML;
        selRadio = "";
        if(firstAssign == true){
            msgCounter++;
            trainingMsg.innerHTML = msgArray[msgCounter];
            firstAssign = false;
            home.style.display = "inline-block";
        }
    })
}


// advances the training message box.
function msgIterate(){
if(msgCounter < 3){
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];

if(msgCounter == 1){
    trainingMsg.style.top = "40%";
}
if(msgCounter == 3){
    trainingMsg.style.top = "60%";
    trainingMsg.style.left = "40%";
    radios.forEach(dontBeDisabled);
}
if (msgCounter ==4){
  
    
}

}
}

centreContainer.addEventListener('mousedown', (event) => {
    
    clickX = event.clientX;
    clickY = event.clientY;
    
    selRadio ="";
    radios.forEach(resetColor);
    });
