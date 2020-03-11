// add solution here
function theBeatlesPlay(musicianArray, instrumentsArray){
  var allPlayers = [];
  
  for (let i = 0; i < musicianArray.length; i++){
    allPlayers.push(musicianArray[i] + " plays " + instrumentsArray[i]);
  }
  return allPlayers;
}

function johnLennonFacts(johnArray){
  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
    ];
    
  var i = 0;
  var newFacts = [];
  
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  
  return newFacts;
  
}