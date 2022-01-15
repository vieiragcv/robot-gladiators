window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 
var fight = function(enemyName) {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if(promptFight.toUpperCase() === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    if (playerHealth <= 0) {
      window.alert(playerNames + " has died!");
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
  else if(promptFight.toUpperCase() === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
  }
  else {
    window.alert("you need to choose a valid option. Try again!");
  }
}
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
    // fight function statements
}