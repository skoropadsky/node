/*function Track () {
	this.track = 'song';
}

Track.getTrack = function () {
	console.log('wtf');
}

Track.getTrack();
*/

function Article() {
  this.created = new Date();
  Article.date = this.created.getDate(); // static propertie
  Article.count++; // static propertie

  Article.showStats = function(){ // static method
  	console.log('Всего: ' + Article.count + ', Последняя: ' + Article.date);
  };
}

Article.count = 0; // initialization of static propertie

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)