var Track = function(name) { // new class
	this.name = name;
}

var Video = function(name) { // enother class
	this.name = name;
}

var mixinGet = { // new mixin with get Methid
	getName: function(){
		return this.name;
	}
}
var mixinPlay = { // enother mixin
	play: function(){
		return "Now playing " + this.name;
	}
}

function extend(ourClass) { // function, that make possible to apply mixins in clases
	if(!arguments[1]){ // if has only one argument - doesn't work
		return;
	}

	for(var i=1; i < arguments.length; i++){ // take one argement since first [1]
		var source = arguments[i];  // this will be our fist mixin and next
		
		for(var prop in source){ // take all properties methods of mixint
			if(!ourClass[prop] && source.hasOwnProperty(prop)) { // check if our class dont contain this prop and is the own prop of current mixin
				ourClass[prop] = source[prop]; // copy mixin's prop into class
			}
		}
	}
}

extend(Track.prototype, mixinGet, mixinPlay); // apply two mixins in first class
extend(Video.prototype, mixinGet, mixinPlay);

var superTrack = new Track("American boy");
console.log(superTrack.getName());
console.log(superTrack.play());

var videoTrack = new Video('Begining');
console.log(videoTrack.play());

//console.log(Video);
//console.log(Track.prototype);
//console.log(Video.prototype);
