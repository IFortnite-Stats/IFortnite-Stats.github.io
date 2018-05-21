$(function() {
  document.getElementById("inputButton").addEventListener("click", function() {var request = require('request');
  var playerName = document.getElementById("inputName").value; // player in game name
  console.log(document.getElementById("inputName").value);
  var options = {
    method: "GET",
    url: `https://fortnite.y3n.co/v2/player/${playerName}`,
    headers: {
      'User-Agent': 'nodejs request',
      'X-Key': "bAwos1FbBdukbq3f9mop"
    }
  }

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var stats = JSON.parse(body);
      console.log(`${playerName} k/d: ${stats.br.stats.pc.all.kpd}`);
    }
  });
  });
});
