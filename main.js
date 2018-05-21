const API_KEY = "bAwos1FbBdukbq3f9mop";

$(function() {
  document.getElementById("inputButton").addEventListener("click", function() {var request = require('request');
  if(document.getElementById("inputName").value != "") {
    var playerName = document.getElementById("inputName").value;
    var options = {
      method: "GET",
      url: `https://fortnite.y3n.co/v2/player/${playerName}`,
      headers: {
        'User-Agent': 'nodejs request',
        'X-Key': API_KEY
      }
    }

    request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        var stats = JSON.parse(body);
        var winsSolo = [];
        var winsDuo = [];
        var winsSquad = [];
        var winsTotal = [];
        winsSolo.push(stats.br.stats.pc.solo.wins, stats.br.stats.pc.solo.winRate);
        winsDuo.push(stats.br.stats.pc.duo.wins, stats.br.stats.pc.duo.winRate);
        winsSquad.push(stats.br.stats.pc.squad.wins, stats.br.stats.pc.squad.winRate);
        winsTotal.push(stats.br.stats.pc.all.wins, stats.br.stats.pc.all.winRate);
        var kdAll = stats.br.stats.pc.all.kpd;
        var killsAll = stats.br.stats.pc.all.kills;
        document.getElementById("soloWins").textContent = winsSolo[0];
        document.getElementById("soloWinrate").textContent = winsSolo[1];
        document.getElementById("duoWins").textContent = winsDuo[0];
        document.getElementById("duoWinrate").textContent = winsDuo[1];
        document.getElementById("squadWins").textContent = winsSquad[0];
        document.getElementById("squadWinrate").textContent = winsSquad[1];
        document.getElementById("totalWins").textContent = winsTotal[0];
        document.getElementById("totalWinrate").textContent = winsTotal[1];
        document.getElementById("KDAll").textContent = kdAll;
        document.getElementById("totalKills").textContent = killsAll;
      }
    });
  }
});
});
