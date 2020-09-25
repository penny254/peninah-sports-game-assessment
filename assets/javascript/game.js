let resetbuttom=document.querySelector("#reset_button")
letresetNum = document.querySelector("#num-resets");


console.log("resetbuttom")

let resetbutton = document.querySelector("resetbutton");
let count=0
resetButton .addEventListener("click",function ()  {
      console.log("resetButton clicked.");

count +=1;
})
if (teamOneGoal.innerHTML < teamTwoGoal.innerHTML) {
alert("Team two win!");  } 
elseif (teamOneGoal.innerHTML  < teamTwoGoal.innerHTML);{
    alert("Team one won!")}   elseifalert("Draw!");  resetNum.innerHTML = count;
teamTwoShoot.innerHTML = 0;
teamOneShoot.innerHTML = 0;
teamTwoGoal.innerHTML = 0;
teamOneGoal.innerHTML = 0;
countTeamOne = 0;
countTeamTwo = 0;
goalTwo = 0;
goalOne = 0;  

let team1shootsbutton=document.querySelector("#teamone_shoots_button");
let  team1numshoots=document.querySelector("#team1_numshoots")
letteamOneGoal = document.querySelector("#teamone-numgoals");

letcountTeamOne = 0;
letgoalOne = 0;
shootButton.addEventListener("click", function () {
    countTeamOne += 1;
    teamOneShoot.innerHTML = countTeamOne;  
    if (Math.random() <1) {
        goalOne += 1;
        teamOneGoal.innerHTML = goalOne;  }});  


let team2shootsbutton=document.querySelector("#team2_shoots_button");

let tean2numshoots=document.querySelector("#team2_numshoot")
letteamTwoGoal = document.querySelector("#teamtwo-numgoals");
  letcountTeamTwo = 0;
  letgoalTwo = 0;
  shootButton2.addEventListener("click", function () {
      countTeamTwo += 1;teamTwoShoot.innerHTML = countTeamTwo;  
      if (Math.random() > 0.2) {goalTwo += 1;
        teamTwoGoal.innerHTML = goalTwo;  }});

