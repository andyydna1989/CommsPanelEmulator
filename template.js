console.log("Ze VCS is running!!");

// logic control variables
let time;
let selRole ="";
let selInstance = "";
let selSide = "";
let msgCounter = 0;
let loggedIn= false;

// buttons and DOM elements
let trainingMsg = document.getElementById("trainingMsg");
let msgArray = ["Hi, welcome to the VCS trainer! This system doesn't look exactly like the VCS you'll use, but the switch actions are the same and it is very similar. Let's get started by familiarising ourselves with the display. Click on this box to continue.", "Here are the navigation buttons. These take you to different pages on the VCS, we will cover the 'Role' page in this tutorial", "This indicates the server you are operating on. When deployed you will work with a live and a sim server. We will just stick with 'sim' for now.", "The middle and left boxes contain selectable items, whereas the right box shows functions we can perform.", "Now, let's get logged on. Start by choosing a role.", "Next, we need to choose an instance, as there may be more than one of a role logged in at a time, e.g WC1 and WC2.", "Now choose whether to operate as a Main or Assistant. On the real system your profile will restrict your options here.", "To complete the process, click the 'Role' function button. This will log you in", "Well done! Now let's log off and complete this tutorial. Click 'Role' again first.", "Now we can click log-off. When logging off you need to hold the button down for at least 3 seconds.", "Congrats, that brings us to the end of the Role page tutorial. Use the 'Home' button to return to the main menu, or practice to cement your knowledge." ];
trainingMsg.onclick=function() {msgIterate()};

let roleButtons = document.getElementsByClassName("roleButton");
let instanceButtons = document.getElementsByClassName("instanceButton");
let sideButtons = document.getElementsByClassName("sideButton");
let home = document.getElementById("homeButton");

let centreLabel = document.getElementById("centreLabel");

let ido = document.getElementById("IDO");
let wc = document.getElementById("WC");
let sd = document.getElementById("SD");
let fa = document.getElementById("FA");
let mc = document.getElementById("MC");

let i1 = document.getElementById("1");
let i2 = document.getElementById("2");
let i3 = document.getElementById("3");
let i4 = document.getElementById("4");

let main = document.getElementById("main");
let asst = document.getElementById("asst");


let role = document.getElementById("changeRole");

role.style.backgroundColor= "grey";
role.disabled=true;
role.onclick=function() {logOnComplete()};

let logOff = document.getElementById("logOff");
logOff.onpointerdown = function() {logOffPress()};
logOff.onpointerup = function() {logOffRel()};
logOff.style.backgroundColor= "grey";
logOff.disabled=true;

// button functions
ido.onclick=function() {roleSelected(this)}
wc.onclick=function() {roleSelected(this)}
sd.onclick=function() {roleSelected(this)}
fa.onclick=function() {roleSelected(this)}
mc.onclick=function() {roleSelected(this)}

i1.onclick=function() {instanceSelected(this)}
i2.onclick=function() {instanceSelected(this)}
i3.onclick=function() {instanceSelected(this)}
i4.onclick=function() {instanceSelected(this)}

asst.onclick=function() {sideSelected(this)}
main.onclick=function() {sideSelected(this)}

for (let i=0; i<roleButtons.length; i++){
    roleButtons[i].disabled = true;
    console.log("disabling buttons");
}

// initiates when the user first clicks a role to log in as
function roleSelected(button){
    console.log(button.innerHTML);
    selRole = button.innerHTML;
    centreLabel.innerHTML = "INSTANCE";

    for (let i=0; i<roleButtons.length; i++){
        roleButtons[i].style.display = "none";
        console.log("for loop");
    }

    for (let i=0; i<instanceButtons.length; i++){
        instanceButtons[i].style.display = "inline";
        console.log("for loop2");
    }
    if(msgCounter > 5){
        trainingMsg.style.display = "none";
    }
msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];
}

function instanceSelected(button){
    console.log("instance selected");
    centreLabel.innerHTML="SIDE";
    selInstance = button.innerHTML;
    for (let i=0; i<instanceButtons.length; i++){
        instanceButtons[i].style.display = "none";
    }

    for (let i=0; i<sideButtons.length; i++){
        sideButtons[i].style.display = "inline";
    }
msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];

}

// the assistant or main selection
function sideSelected(button){
    
    selSide=button.innerHTML;
    for (let i=0; i<sideButtons.length; i++){
        sideButtons[i].style.display = "none";
    }
    role.disabled = false;
    role.style.backgroundColor="rgba(147, 112, 216, 0.404)"
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];
}

function logOnComplete(){
    if(loggedIn == false){
    window.alert("Well done, you have logged in as " + selRole + selInstance + " " + selSide);
    console.log("log-on complete");
    logOff.disabled=false;
    logOff.style.backgroundColor="rgba(147, 112, 216, 0.404)"
    msgCounter++;
    console.log("progressing the message");
    trainingMsg.innerHTML = msgArray[msgCounter];
    loggedIn = true;
    }
    else{
        role.disabled = true;
    role.style.backgroundColor="grey"
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];
    }
}

function logOffPress(){
time = Date.now();

}

function logOffRel(){
    console.log(Date.now() - time);
    if ((Date.now() - time) > 2000){
        
    
    msgCounter++;
    console.log("progressing the message");
    trainingMsg.innerHTML = msgArray[msgCounter];
    window.alert("log-off complete");
    

    for (let i=0; i<roleButtons.length; i++){
        roleButtons[i].style.display = "inline-block";
    }

    role.style.backgroundColor= "grey";
role.disabled=true;
logOff.style.backgroundColor= "grey";
logOff.disabled=true;
loggedIn = false;
home.style.display = "inline-block";
    }
}

function msgIterate(){
if(msgCounter < 4){
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];

if(msgCounter == 1){
    trainingMsg.style.top = "75%";
}
if(msgCounter == 2){
    trainingMsg.style.top = "1%";
    trainingMsg.style.left = "35%";
}
if(msgCounter == 3){
    trainingMsg.style.top = "20%";
    trainingMsg.style.left = "20%";
}
if (msgCounter ==4){
    trainingMsg.style.top = "70%";
    for (let i=0; i<roleButtons.length; i++){
        roleButtons[i].disabled = false;
        console.log("enabling buttons");
    }
}

}
}