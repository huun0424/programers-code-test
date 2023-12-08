const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
  var answer = players;

  const hashMapPlayers = new Map();

  players.forEach((player, idx) => {
    hashMapPlayers.set(player, idx);
  });

  callings.forEach((name) => {
    const callingPlayerIndex = hashMapPlayers.get(name);
    const aheadPlayerIndex = callingPlayerIndex - 1;
    const aheadPlayer = answer[callingPlayerIndex - 1];

    hashMapPlayers.set(name, callingPlayerIndex - 1);
    hashMapPlayers.set(aheadPlayer, callingPlayerIndex);

    players[callingPlayerIndex - 1] = name;
    players[callingPlayerIndex] = aheadPlayer;
  });

  return answer;
}

solution(players, callings);
