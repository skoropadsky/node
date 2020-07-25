class HallOfFame{

  constructor(size=5, players = []){
    this.size = size > 5 ? 5 : size;
    this.players = players;
  }
  
  sortPl(){
  	this.players.sort((a,b) => {
  		if(b[1] == a[1])
  			return a[0] > b[0];
  		else 
  			return b[1] - a[1];
  	 });
  }

  get list(){
  	var res = [];

  	if(this.players) {
  		this.sortPl();
	  	for(var i = 0; i < this.size; i++){
	  		if(this.players[i])
	  			res.push(this.players[i][0] + ': ' + this.players[i][1]);
	  		else
	  			res.push('');
	  	}
  	} else {
  		for(var i = 0; i < this.size; i++){
	  			res.push('');
	  	}
  	}

  	return res;
  }
  
  add(player){
  	var isSameName = false;

  	if(player && this.players){
  		this.players.forEach( (thePlayer, i) => {
  			if(thePlayer[0] == player[0]) {
  				isSameName = true;
  				if (thePlayer[1] < player[1])
  					this.players[i][1] = player[1];
  			}
  		});

  		if(!isSameName) this.players.push(player);
  		
  		this.sortPl();
  	}

  	return this;
  }
  
}

var top3 = new HallOfFame(3, [["Ada",99], ["Bob",42], ["Clo", 101], ["Dan", 3], ["Afsan", 42]]);
//var top4 = new HallOfFame();
console.log(top3.list);
//console.log(top4.list);
top3.add(["Crag", 58]).add(["Ada", 158]);
console.log(top3.list);


