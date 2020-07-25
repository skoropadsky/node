function formatDuration (seconds) {
  var date = new Date(0);
  var newDate = new Date(0);
  date.setSeconds(seconds);

  var year = date.getFullYear() - newDate.getFullYear();
  var day = date.getDate() - newDate.getDate();
  var hours = date.getHours() - newDate.getHours();
  var minutes = date.getMinutes() - newDate.getMinutes();
  var seconds = date.getSeconds() - newDate.getSeconds();

	var time = '';

	if (year) time += year + ' years, ';
	if (day) time += day + ((day>1) ? ' days, ' : ' day, ');
	if (hours) time += hours + ((hours>1) ? ' hours, ' : ' hour, ');
	if (minutes)	time += minutes + ((minutes>1) ? ' minutes ' : ' minute ');
	if (seconds) time += 'and ' + seconds + ((seconds>1) ? ' seconds' : ' second');

  /*if(year || day || hours || minutes || seconds) return time;
  else return 'now';*/

  return new Date().getDay();

}

console.log(formatDuration(2343));
