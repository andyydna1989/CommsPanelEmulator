console.log("Ze VCS is running!!");

// logic control variables
let time;
let selRole ="";
let selInstance = "";
let selSide = "";
let msgCounter = 0;
let loggedIn= true;
let monRole=false;
let monSide = "";

// buttons and DOM elements
let trainingMsg = document.getElementById("trainingMsg");
let msgArray = ["For this tutorial we're back on the Role tab, but this time we're already logged in. We're going to learn how to monitor another role's communicaions. Click here when ready." , "The page looks exactly the same as before. First, select the role you wish to monitor. "
, "Now select an instance, note only 1 and 2 are available as 3 and 4 are not logged in.", "And now the side you wish to monitor", "You'll now see that the monitor button is available. Press it to begin monitoring.", "Top work. You'll notice you can only monitor 1 role, and that the tab now defaults to the type/side menu. To deselect monitoring, click on the role you are monitoring, then deselect monitor in the functions window."
,  "Good work, you're now free to practice as you wish. Click HOME when you want to return to the tutorial menu."];
trainingMsg.onclick=function() {msgIterate()};

let roleButtons = document.getElementsByClassName("roleButton");
let instanceButtons = document.getElementsByClassName("instanceButton");
let sideButtons = document.getElementsByClassName("sideButton");
let home = document.getElementById("homeButton");
let monitor = document.getElementById("monitor");
monitor.disabled = true;
monitor.style.backgroundColor= "grey";

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
i3.style.backgroundColor ="grey";
i4.style.backgroundColor ="grey";
i3.disabled=true;
i4.disabled=true;

let main = document.getElementById("main");
let asst = document.getElementById("asst");


let role = document.getElementById("changeRole");

role.style.backgroundColor= "grey";
role.disabled=true;
role.onclick=function() {logOnComplete()};

let logOff = document.getElementById("logOff");
logOff.onpointerdown = function() {logOffPress()};
logOff.onpointerup = function() {logOffRel()};

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

monitor.onclick=function() {monitorClick()};

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
  if(monRole == false){  
    switch(button){
      case main:
        monSide = "main";
      break;
    case asst:
      monSide = "asst";
      break;
    }
    selSide=button.innerHTML;
    for (let i=0; i<sideButtons.length; i++){
        sideButtons[i].style.display = "none";
    }
    if (loggedIn == false){
    role.disabled = false;
    role.style.backgroundColor="rgba(147, 112, 216, 0.404)";
    }
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];
monitor.disabled = false;
monitor.style.backgroundColor="rgba(147, 112, 216, 0.404)";
}
else {
monitor.disabled = false;
monitor.style.backgroundColor="rgba(147, 112, 216, 0.404)";
}
}

function logOnComplete(){
    if(loggedIn == false){
    window.alert("Well done, you have logged in as " + selRole + selInstance + " " + selSide);
    console.log("log-on complete");
    logOff.disabled=false;
    monSide = false;
    logOff.style.backgroundColor="rgba(147, 112, 216, 0.404)"
    msgCounter++;
    console.log("progressing the message");
    trainingMsg.innerHTML = msgArray[msgCounter];
    loggedIn = true;
    for (let i=0; i<roleButtons.length; i++){
      roleButtons[i].style.display = "inline-block";
  }
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
    window.alert("Well you've really ruined this tutorial haven't you... Either log yourself back in or refresh the page!");
    

    for (let i=0; i<roleButtons.length; i++){
        roleButtons[i].style.display = "inline-block";
    }
monRole = false;
monSide = "";
for (let i=0; i<sideButtons.length; i++){
  sideButtons[i].style.display = "none";
  sideButtons[i].disabled = false;
  sideButtons[i].style.backgroundColor ="rgba(224, 192, 9, 0.897)";
}
role.style.backgroundColor= "grey";
role.disabled=true;
logOff.style.backgroundColor= "grey";
logOff.disabled=true;
loggedIn = false;

    }
}

function monitorClick(){
  if (monRole == false){
  monitor.disabled = true;
  monitor.style.backgroundColor = "grey";
for (let i=0; i<sideButtons.length; i++){
  sideButtons[i].style.display = "inline";
}
msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];
console.log(monSide);
switch (monSide){
case "main":
  console.log("yes");
  asst.disabled = true;
  asst.style.backgroundColor = "grey";
  break;
case "asst":
  main.disabled = true;
  main.style.backgroundColor = "grey";
  break;
}
monRole = true;
}
else{
  console.log("unMonitoring");
  monRole = false;
  monSide = "";
  asst.disabled = false;
  main.disabled = false;
  for (let i=0; i<sideButtons.length; i++){
    sideButtons[i].style.display = "none";
    sideButtons[i].style.backgroundColor ="rgba(224, 192, 9, 0.897)";
  }
  for (let i=0; i<roleButtons.length; i++){
    roleButtons[i].style.display = "inline";
  }
  home.style.display = "inline-block";
  msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];
}
}

function msgIterate(){
if(msgCounter < 1){
    msgCounter++;
console.log("progressing the message");
trainingMsg.innerHTML = msgArray[msgCounter];

if(msgCounter == 1){
    trainingMsg.style.top = "75%";
    for (let i=0; i<roleButtons.length; i++){
      roleButtons[i].disabled = false;
      console.log("enabling buttons");
  }
}

}
}