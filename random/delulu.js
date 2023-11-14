var targetDate = new Date('11/15/2023 00:00:00');

function updateCountdown() {
  var currentDate = new Date();

  var timeDifference = targetDate - currentDate;

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  var countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

setInterval(updateCountdown, 1000);

updateCountdown();

//delulu karyll