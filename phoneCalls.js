console.log("Ze VCS is running!!");

// logic control variables
let msgCounter = 0;
let calling;
let activeCalls = 0;
let selectedCall;
let firstCall = false;
let firstHangup = false;
let answeredMC = false;
let doubleSelect = false;
let firstMulti = false;
let confOn = false;
let confParticipants = [];
let firstConf = false;


// buttons
let trainingMsg = document.getElementById("trainingMsg");
let msgArray = ["Hi again. Now let's learn how to use the VCS landline Let's start with a tour of the 'Main' tab. Click when you're ready.","Here in the middle panel we have the quick-dials. Instances that are logged in show green and are callable, others show red and cannot be called.", "As with the Role page, the right hand side shows functions that we can perform.", "On the left we have the radio interface, we'll cover that in the next tutorial.", "Let's begin by making a simple call using the Quick-Dials. Click on one of the roles shown in green to make a call.", "Good stuff, now use 'Clear Call' to end your conversation. they were boring anyway.", "Well done. To answer a call is easy, it will appear in your calls list and you simply click on it. Let's try that now, you can see the MC is calling!", "Now let's look at what happens if we make another call at the same time as we have the MC on the line. Call anyone you like!", "You can see that the MC is now on hold. You could return to the original call by pressing it in the call list. But let's not! Let's make a conference call. Click on your current call again, then click on the MC call. They will both go gold. If you make a mistake, just click in the centre (telephony) panel to cancel.", "Good stuff, now you'll see the Conf button has become live. Press it to create a conference between selected calls.", "Well done, you created a conference call. That concludes this tutorial. You can now use Clear Call to end the conference call and practice as you like. When you're ready, press 'HOME' to return to the lesson menu."  ];
trainingMsg.onclick=function() {msgIterate()};

let centreContainer=document.getElementById("centreContainer");

let callerButtons = document.getElementsByClassName("callerButton");
let home = document.getElementById("homeButton");
let conference = document.getElementById("conference");
let transfer = document.getElementById("transfer");
conference.disabled = true;

let centreLabel = document.getElementById("centreLabel");
let clear = document.getElementById("clear");
clear.onclick=function() {clearCall()};

let idos = document.getElementById("IDOS");
let idon = document.getElementById("IDON");
let wc1 = document.getElementById("WC1");
let wc2 = document.getElementById("WC2");
let sd = document.getElementById("SD");
let fa = document.getElementById("FA");
let fico = document.getElementById("FICO");
let natrep = document.getElementById("NATREP");
let call1 = document.getElementById("call1");
let call2 = document.getElementById("call2");
let call3 = document.getElementById("call3");


// button functions
fa.onclick=function() {callerSelected(this)};
idos.onclick=function() {callerSelected(this)};
idon.onclick=function() {callerSelected(this)};
wc1.onclick=function() {callerSelected(this)};
wc2.onclick=function() {callerSelected(this)};
fico.onclick=function() {callerSelected(this)};
natrep.onclick=function() {callerSelected(this)};


call1.onclick=function() {callClicked(this)};
call2.onclick=function() {callClicked(this)};
call3.onclick=function() {callClicked(this)};

conference.onclick=function() {confStart()};

// when an in-progres call from the right-hand column is clicked

function callClicked(button){
    button.style.backgroundColor="rgba(224, 192, 9, 0.897)";
    console.log(doubleSelect); // needed to tell if the click is to change call or to begin the conf process.
    if (doubleSelect == false){
    switch(button){
        case call1:
            if(selectedCall == 1){
                doubleSelect = true;
                call1.style.backgroundColor="rgba(224, 192, 9, 0.897)"
                console.log("Double!");
            }
            else{
            selectedCall = 1;
            call2.style.backgroundColor = "lightgray";
            call3.style.backgroundColor = "lightgray";
           
            }
            break;
        case call2:
            if(selectedCall == 2){
                doubleSelect = true;
                call2.style.backgroundColor="rgba(224, 192, 9, 0.897)"
                console.log("Double!");
            }
            else {
            selectedCall = 2;
            call1.style.backgroundColor = "lightgray";
            call3.style.backgroundColor = "lightgray";
            
            }
            break;
        case call3:
            if(selectedCall == 3){
                doubleSelect = true;
                call3.style.backgroundColor="rgba(224, 192, 9, 0.897)"
                console.log("Double!");
            }
            else{
            selectedCall = 3;
            call1.style.backgroundColor = "lightgray";
            call2.style.backgroundColor = "lightgray";
            }
            break;
            }
        
    if(answeredMC == false){
        msgCounter++;
        trainingMsg.innerHTML = msgArray[msgCounter];
        answeredMC=true;
    }
}

// this enables the call XFR or Conf capabilities, making sure if a call has already been double selected another can be added.
else {
    console.log("entering the doubleSelect chain");
    conference.disabled = false;
    conference.style.backgroundColor="rgba(147, 112, 216, 0.404)"
    if (firstMulti == false){
        msgCounter++;
        trainingMsg.innerHTML = msgArray[msgCounter];
        firstMulti = true;
    }
    switch(button){
        case call1:
            call1.style.backgroundColor = "rgba(224, 192, 9, 0.897)";
            confParticipants.push(call1);
            break;
            
        case call2:
            call2.style.backgroundColor = "rgba(224, 192, 9, 0.897)";
            confParticipants.push(call2);
            break;
        case call3:
            call3.style.backgroundColor = "rgba(224, 192, 9, 0.897)";
            confParticipants.push(call3);
            break;
            }
            }
}

// the function for initiating a call from the centre container.
function callerSelected(button){
    switch(activeCalls){
        case 0:
            call1.innerHTML = button.innerHTML;
            call1.style.display = "block";
            call1.style.backgroundColor = "rgba(224, 192, 9, 0.897)";
            selectedCall = 1;
            break;
        case 1:
            call2.innerHTML = button.innerHTML;
            call2.style.display = "block";
            call2.style.backgroundColor = "rgba(224, 192, 9, 0.897)";
            call1.style.backgroundColor = "lightgray";
            selectedCall = 2;
            break;
        case 2:
            call3.innerHTML = button.innerHTML;
            call3.style.display = "block";
            call3.style.backgroundColor = "rgba(224, 192, 9, 0.897)";
            call2.style.backgroundColor = "lightgray";
            call1.style.backgroundColor = "lightgray";
            selectedCall = 3;
            break;
            default:
            window.alert("I'm too lazy to program more call slots! Hang one up and try again");
    }
    if (activeCalls < 3){
        activeCalls ++;
    }

    if(firstCall == false){
        msgCounter++;
        trainingMsg.innerHTML = msgArray[msgCounter];
        firstCall = true;
    }

    if(msgCounter == 7){
        msgCounter++;
        trainingMsg.innerHTML = msgArray[msgCounter];
    }
}

// advances the training message box.
function msgIterate(){
if(msgCounter < 4){
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];

if(msgCounter == 1){
    trainingMsg.style.top = "40%";
}
if(msgCounter == 2){
    trainingMsg.style.top = "40%";
    trainingMsg.style.left = "30%";
}
if(msgCounter == 3){
    trainingMsg.style.top = "60%";
    trainingMsg.style.left = "15%";
}
if (msgCounter ==4){
  
    
}

}
}

// the clear button function, adaptive to conference calls
function clearCall(){

    if (confOn == false){
    switch(selectedCall){

        case 1:
            call1.style.display = "none";
            activeCalls--;
            selectedCall=0;
            break;
        case 2:
            call2.style.display = "none";
            activeCalls--;
            selectedCall=0;
            break;
        case 3:
            call3.style.display = "none";
            activeCalls--;
            selectedCall=0;
            break;
    }

    if(firstHangup == false){
        msgCounter++;
        trainingMsg.innerHTML = msgArray[msgCounter];
        firstHangup = true;
        call1.innerHTML = "MC";
            call1.style.display = "block";
            call1.style.backgroundColor = "rgba(184, 0, 0, 0.897)";
            activeCalls ++;
            console.log("msg array index is: " + msgCounter);
    }
}
else{
    confOn = false;
    console.log(confParticipants);
    confParticipants.forEach(clearConf);
}
}

// the actions on press of the conference button
function confStart(){
   confOn = true;
   switch(selectedCall){

    case 1:
        confParticipants.push(call1);
        break;
    case 2:
        confParticipants.push(call2);
        break;
    case 3:
        confParticipants.push(call3);
        break;
}
   conference.disabled = true;
    conference.style.backgroundColor = "lightgray";

    if(firstConf == false){
        msgCounter++;
        trainingMsg.innerHTML = msgArray[msgCounter];
        firstConf = true; 
        home.style.display = "inline-block";
    }
}

function clearConf(object){
    object.style.display = "none";
    activeCalls--;
    selectedCall=0;
}

centreContainer.addEventListener('mousedown', (event) => {
    
    clickX = event.clientX
    clickY = event.clientY
    confParticipants = [];
    console.log("click");
    conference.disabled = true;
    conference.style.backgroundColor = "lightgray";
    
    doubleSelect = false;
    console.log("selected Call" + selectedCall);
   switch(selectedCall){
            case 1:
            call2.style.backgroundColor = "lightgray";
            call3.style.backgroundColor = "lightgray";
            break;
            case 2:
            call1.style.backgroundColor = "lightgray";
            call3.style.backgroundColor = "lightgray";
            break;
            case 3:
            call2.style.backgroundColor = "lightgray";
            call1.style.backgroundColor = "lightgray";
    } 
    });
