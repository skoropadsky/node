// 'use strict';
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
        lastName: { // value и witable не возможно указать вместе с get и set (свойство данные !== свойство-аксессор)
            enumerable: true,
            configurable: true,
            get: function(){
                return this.surname = this.fullName.split(' ')[1];
            },
            set: function(surname){
                this.surname = surname;
                this.fullName = this.fullName.split(' ')[0] + ' ' + surname;
            }
        },
        age: {
            value: 88,
            writable: false,
            enumerable: true,
            configurable: true,
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
console.log( vasya.age );
vasya.age = 14; // в режиме 'use strict' будет ошибка
console.log( vasya.age ); // остается такое же, так как vasya.age.writable === false


let descriptorFirstName = Object.getOwnPropertyDescriptor(vasya, 'firstName');
let descriptorLastName = Object.getOwnPropertyDescriptor(vasya, 'lastName');

console.log( JSON.stringify(descriptorFirstName, null, 2 ) );
console.log( JSON.stringify(descriptorLastName, null, 2 ) );