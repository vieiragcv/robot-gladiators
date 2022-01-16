window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 


var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if(promptFight === "FIGHT" || promptFight === "fight") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
      
      if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          playerMoney = playerMoney + 20;
          window.alert("You looted 20 bitcoin from " + enemyName +"`s body. You have a total of " + playerMoney + " bitcoins now.");
          break;
      } 

      else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      playerHealth = playerHealth - enemyAttack;
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
      
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        console.log("You Died!");
        break;
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }

    else if(promptFight === "SKIP" || promptFight === "skip") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has decided to pay his way out of this one. Goodbye Loser!");
        playerMoney = playerMoney - 10;
        window.alert(playerName + " had to pay 10 bitcoin to being a little bishhh.");
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    else {
    window.alert("you need to choose a valid option. Try again!");
    }
   }
}
for (var i = 0; i < enemyNames.length; i++) {

  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i+1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    console.log (' You have ' + playerHealth + 'life left');
  }
  
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}