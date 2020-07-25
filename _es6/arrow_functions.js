//ECMAScript5

var UrlExp = function(){ // our class
	this.url = ' http://dsfdf.ocm';
}

UrlExp.prototype.getUrl = function(){
	var self = this; // copy this to new variable for useing in next function
	return	[1,2,3].map(function(num){ // when secon function is runnint - we lose context (this), so now this is self
						return num + self.url;
					});
};

var myUrl = new UrlExp();
console.log(myUrl.getUrl());

//ECMAScript6

var UrlExp1 = function(){
	this.url = 'http://dsfdf.ocm';
}

UrlExp1.prototype.getUrl = function(){
	return	[1,2,3].map(num => {
						return num + " " + this.url;
					});
};

var myUrl1 = new UrlExp1();
console.log(myUrl1.getUrl());

//ECMAScript6 with classe

class UrlExp2{
	constructor(){
		this.url = ' http://dsfdf.ocm';
	}

	getUrl(){
		return	[1,2,3].map(num => {
						return num + " " + this.url;
					});
	}
}

var myUrl2 = new UrlExp2();
console.log(myUrl2.getUrl());
