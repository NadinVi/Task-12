// 1. Створити клас Людина.
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 
//2. Створити клас Автомобіль.
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, 
// якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина 
// для виведення інформації про власника

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.


function Parent(name, age) {
    this.name = name;
    this.age = age;
}


Parent.prototype.getInfo = function () {
    return `My name is ${this.name}. I'm ${this.age} year's old.`
};


const owners = [
    {
        name: "Nadiia",
        age: 36,
    },
    {
        name: "Tatyana",
        age: 17,
    },
    {
        name: "Serhii",
        age: 30,
    }
];

owners
    .map(function (owner) {
        return new Parent(owner.name, owner.age);
    })
    .forEach(function (owner) {
        //console.log(owner);
        console.log(owner.getInfo());
    });


function Cars(carMake, model, yearOfRegistr, numberPlate) {
    this.carMake = carMake;
    this.model = model;
    this.yearOfRegistr = yearOfRegistr;
    this.numberPlate = numberPlate;

    this.ownerOfCar = function(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`${owner.name} not yet 18!`)
        }
    }

}

Cars.prototype.infoAuto = function() {
    return `Auto ${this.carMake} model ${this.model}, ${this.yearOfRegistr} year of registration. Number plate ${this.numberPlate}. Owner of te car ${this.ownerOfCar}`
};

// Cars.prototype.ownerOfCar = function(owner) {
//     if (owner.age >= 18) {
//         this.owner = owner;
//     } else {
//         console.log(`${owner.name} not yet 18!`)
//     }
// };
// Cars.prototype.infoAuto = function () {
//     if (this.owners.age >= 18) {
//     return `Auto ${this.carMake} model ${this.model}, ${this.yearOfRegistr} year of registration. Number plate ${this.numberPlate}. Owner is ${this.owner.getInfo()}`
// } else {
// return `Auto ${this.carMake} model ${this.model}, ${this.yearOfRegistr} year of registration. Number plate ${this.numberPlate}. Not owner of this car`
// }
// };



const cars = [
    {
        carMake: "Hyundai",
        model: "Tucson",
        yearOfRegistr: 2020,
        numberPlate: "KA3325SV",
    },
    {
        carMake: "JAGUAR",
        model: "XF",
        yearOfRegistr: 2022,
        numberPlate: "KI3578VA",
    },
    {
        carMake: "Nissan",
        model: "X-Trail",
        yearOfRegistr: 2018,
        numberPlate: "VO7733VA",
    }
]

cars
    .map(function (car) {
        return new Cars(car.carMake, car.model, car.yearOfRegistr, car.numberPlate);
    })
    .forEach(function (car) {
        //console.log(car);
        console.log(car.infoAuto());
        console.log(car.ownerOfCar())
    })



