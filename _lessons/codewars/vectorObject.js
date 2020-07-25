var Vector = function (components) {
  this.components = [].concat(components) || [];
};

Vector.prototype.isSameLength = function(obj1,obj2){
	try{
		if (obj1.components.length === obj2.components.length){
			throw true;
		} else {
			throw false;
		}
	} catch(e) {
		return e;
	}
}

Vector.prototype.add = function(obj){
	
	if (!this.isSameLength(this, obj)){
		throw "Objects aren't equal";
	}

	return new Vector( this.components.map(function(item,i){
			return item + obj.components[i];
		})
	);
};

Vector.prototype.equals = function(obj){
	if (this.components.length != obj.components.length) return false;

	var isEqual = true;
	this.components.forEach(function(item, i){
			if(item !== obj.components[i]) isEqual = false;
	});

	return isEqual;
};

Vector.prototype.subtract = function(obj){
	if (!this.isSameLength(this, obj)){
		throw "Objects aren't equal";
	}

	return new Vector(this.components.map(function(item,i){
		return item - obj.components[i];
	}));

};

Vector.prototype.dot = function(obj){
	if (!this.isSameLength(this, obj)){
		throw "Objects aren't equal";
	}

	var newComponents = this.components.map(function(item,i){
		return item * obj.components[i];
	});

	return newComponents.reduce(function(sum, current){
		return sum + current;
	});

};

Vector.prototype.norm = function(){

	var newComponents = this.components.map(function(item){
		return Math.pow(item,2);
	});

	newComponents = newComponents.reduce(function(sum, current){
		return sum + current;
	});

	return Math.sqrt(newComponents);
};

Vector.prototype.toString = function(){

	return '(' + this.components + ')';

};



var a = new Vector([1, 2, 3]);
var b = new Vector([1, 2, 3]);

console.log(a.components);
console.log(a.add(b));
console.log(a.equals(b));