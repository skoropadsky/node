function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, { // определяем сразу несколько новых свойств: firstName and lastName

  	firstName: {
  		get: function(){
  			return this.name = this.fullName.split(' ')[0];
  		},
  		set: function(name){
  			this.name = name;
  			this.fullName = name + ' ' + this.fullName.split(' ')[1];
  		}
  	},

		lastName: {
  		get: function(){
  			return this.surname = this.fullName.split(' ')[1];
  		},
  		set: function(surname){
  			this.surname = surname;
  			this.fullName = this.fullName.split(' ')[0] + ' ' + surname;
  		}
  	}  	

  });


}


var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
vasya.firstName = 'Владик';

console.log( vasya.fullName ); // Василий Сидоров