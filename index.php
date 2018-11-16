<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-http-equiv="X-UA-Compatible" content="ie=edge">
    <title>xx-c3pt10n</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="bundle.js"></script>
  </head>
  <body>
    <div class="background">
      <div class="searchDiv">
        <span class="searchSpan">
          <span>player name:</span>
          <input type="text" id="inputName" required>
          <a id="inputButton" href="#">search</a>
        </span>
      </div>
      <div class="stats">
            <div class="row">
             <div class="column">
               <h2>solo</h2>
               <p>wins: <span id="soloWins"></span></p>
               <p>winrate: <span id="soloWinrate"></span></p>
               <h2>duo</h2>
               <p>wins: <span id="duoWins"></span></p>
               <p>winrate: <span id="duoWinrate"></span></p>
             </div>
             <div class="column">
               <h2>squad</h2>
               <p>wins: <span id="squadWins"></span></p>
               <p>winrate: <span id="squadWinrate"></span></p>
               <h2>total</h2>
               <p>wins: <span id="totalWins"></span></p>
               <p>winrate: <span id="totalWinrate"></span></p>
               <p>KD: <span id="KDAll"></span></p>
               <p>kills: <span id="totalKills"></span></p>
             </div>
            </div>
      </div>
    </div>
    <section class="section section-light" id="1stSection">

    </section>
  </body>
</html>
