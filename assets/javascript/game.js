let resetbuttom=document.querySelector("#reset_button")
let resetNum = document.querySelector("#num-resets");


console.log("resetbuttom")
let countreset=document.querySelector("#num-resets")
let resetbutton = document.querySelector("#reset-button");
let count=0

resetbutton .addEventListener("click",function ()  {
      console.log("resetButton clicked.");
    if (teamoneNumgoals.innerHTML>teamtwoNumgoals.innerHTML){

    
            alert("Team one won!")}
        else{
        alert("Team two win!")  }
  count +=1;
  countreset.innerHTML=count
  countTeamOne=0
  teamoneNumgoals.innerHTML=0
  teamonenumshoot.innerHTML=0
  shoots = 0;
  teamtwoNumgoals.innerHTML=0
  teamtwonumshots.innerHTML=0
  shoots=0

  

})

let teamoneNumgoals=document.querySelector("#teamone-numgoals")
let teamtwoNumgoals=document.querySelector("#teamtwo-numgoals")
 
      

let teamoneShootButton=document.querySelector("#teamone-shoot-button");
let  teamonenumshoot=document.querySelector("#teamone-numshots")
let countTeamOne = 0;
let shoots = 0;

teamoneShootButton.addEventListener("click", function () {
  if (Math.random() <0.5) {
      countTeamOne+=1
      teamoneNumgoals.innerHTML=countTeamOne;
  }
        shoots += 1;
        teamonenumshoot.innerHTML = shoots;  });  


let teamtwoshootsbutton=document.querySelector("#teamtwo-shoot-button");

let teamtwonumshots=document.querySelector("#teamtwo-numshots")
let teamtwoGoal = document.querySelector("#teamtwo-numgoals");
  let countTeamTwo = 0;
  teamtwoshootsbutton.addEventListener("click", function () {
      countTeamTwo += 1;
      
      if (Math.random() > 0.2) {
        teamtwoNumgoals.innerHTML=countTeamTwo;
          shoots += 1;
          teamtwonumshots.innerHTML = shoots;  }});

          