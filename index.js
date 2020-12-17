const client = require('discord-rich-presence')('787275871827525632');

function calculateChristmasCountdown(){
    
  //Get today's date.
  var now = new Date();

  //Get the current month. Add a +1 because
  //getMonth starts at 0 for January.
  var currentMonth = (now.getMonth() + 1);

  //Get the current day of the month.
  var currentDay = now.getDate();

  //Work out the year that the next Christmas
  //day will occur on.
  var nextChristmasYear = now.getFullYear();
  if(currentMonth == 12 && currentDay > 25){
      //This year's Christmas Day has already passed.
      nextChristmasYear = nextChristmasYear + 1;
  }

  var nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
  var christmasDay = new Date(nextChristmasDate);

  //Get the difference in seconds between the two days.
  var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

  var days = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  //Don't calculate the time left if it is Christmas day.
  if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
      //Convert these seconds into days, hours, minutes, seconds.
      days = Math.floor(diffSeconds / (3600*24));
      diffSeconds  -= days * 3600 * 24;
      hours   = Math.floor(diffSeconds / 3600);
      diffSeconds  -= hours * 3600;
      minutes = Math.floor(diffSeconds / 60);
      diffSeconds  -= minutes * 60;
      seconds = diffSeconds;
  }

  //Add our counts to their corresponding HTML elements.
  let details = days + ' Days ' + hours + ' Hours'
  let state = minutes + ' Minutes ' + seconds + ' Seconds'

  return [details, state];
}

calculateChristmasCountdown();

setInterval(function() {
  let details = calculateChristmasCountdown()

  client.updatePresence({
    state: details[1],
    details: details[0],
    startTimestamp: Date.now(),
    endTimestamp: Date.now(),
    largeImageKey: 'xmas',
    largeImageText: 'Text u can change',
    smallImageKey: 'xmas',
    smallImageText: 'Made by ItzWiresDev#6193',
    partyId: 'snek_party',
    partySize: 1,
    partyMax: 100,
    matchSecret: 'nah',
    joinSecret: 'hehehehe',
    spectateSecret: 'no',
  });
}, 1000);
