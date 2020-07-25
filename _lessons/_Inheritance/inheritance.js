function Track (props) { //  создаем первый класс, который в качстве параметров принимает обьект
	this.actor = props.actor;
	this.track = props.track;

	this.hello = function(){ // объявление метода прямо в конструкторе (будет копия в кажом экземпляре, вмеcто ссылки в __proto__)
		console.log('Hello mothefucker!');
	}
}

function Video (props) { //  создаем второй класс, который в качстве параметров принимает похожий обьект
	Track.apply(this, arguments); //  вызываем конструктор первого класса, с контекстом и парамметрами второго
	this.film = props.film; // добавляем новый парамметр второму классу
}
Video.__proto__ = Object.create(Track.prototype); // копируем методы первого класса во второй
Video.prototype.constructor = Video; // в следствии предидущего действия конструктор второго класа заместился конструктором
// первого, поэтому переприсваиваем конструктор, конструктору второго класса
// или копируем методы по одному
// Video.prototype.listing = Track.prototype.listing;



Track.prototype.listing = function(){ // определяем метод дял родительского класса
	console.log("Now plaing: " + this.track + " by " + this.actor);
}

Video.prototype.listing = function(){ // переопределяем метод второго класса, скопированный из родительского
	console.log("Now watching: " + this.film + " by " + this.actor);
}

var track1 = new Track({
	actor: "Uma turman",
	track: "Жизнь прекрасна"
});

var track2 = new Track({
	actor: "Yung Lean",
	track: "Golden"
});

var video1 = new Video({
	actor: 'Travolta',
	track: 'Psy',
	film: 'good'
});

track1.listing();
track1.hello();
track2.listing();
video1.listing();
video1.hello();

console.log(track1);
console.log(video1);


