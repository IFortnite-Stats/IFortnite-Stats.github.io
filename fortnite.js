var request = require('ajax-request');

request('url', function(err, res, body) {});

request({
	url:'https://api.fortnitetracker.com/v1/profile/pc/1lluz10n',
	method: 'GET',
  dataType: "jsonp",
 	headers: {"TRN-Api-Key": "d46a1e6c-77ad-42c4-8efa-e3e5129bc1ef"},
  data: {
    key: "Wins"
  },

}, function(err, res, body) {
    console.log(1);
  	var data = JSON.parse(body);
    console.log(data);
  	/*
  	var totalWins = data.lifeTimeStats[8].value;
	var totalKills = data.lifeTimeStats[10].value;
  	var Output = "My Total Wins are: " + totalWins.toString() + ", My Total Kills are: "
  	 + totalKills.toString();
  	 */
  	 var array = [];
  	 var placeholder = "";
  	 var fixedInfo = "";

  	 var d = new Date();
  	 var year = d.getFullYear();
  	 var month = '' + (d.getMonth() + 1);
  	 var day = '' + d.getDate();

  	if (month.length < 2)
  		month = '0' + month;
    if (day.length < 2)
    	day = '0' + day;

  	 var today = year + "-" + month + "-" + day;

  	 for (var i = 0; i < data.recentMatches.length; i++) {
  	 	placeholder = "";
  	 	for (var j = 0; j < 10; j++) {
  	 		placeholder += (data.recentMatches[i].dateCollected[j]).toString();

  	 	}
  	 	array[i] = placeholder;
  	 }
  	 for (var i = 0; i < array.length; i++) {
  	 	fixedInfo = array.join(",");
  	 }
  	 console.log(fixedInfo);
  	 console.log("\n" + today);

  	 var times = 0;

  	 for (var x = 0; x < array.length; x++) {
  	 	if (array[x] == today)
  	 		times++;
  	 }
	console.log(times);

	console.log(array[3]);
});
