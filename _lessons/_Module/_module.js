var myModule = (function(){
	var counter = 0;

	var getCounter = function(){
		console.log(counter);
	}

	var increaseCounter = function(){
		counter++;
	}

	return {
		getCounter: getCounter,
		increaseCounter: increaseCounter
	};

}());

myModule.getCounter();
myModule.increaseCounter();
myModule.increaseCounter();
myModule.increaseCounter();
myModule.increaseCounter();
myModule.increaseCounter();
myModule.getCounter();