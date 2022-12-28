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
    console.log(`Name of owner ${this.name}. Age: ${this.age}.`)
};


function Cars(carMake, model, yearOfRegistr, numberPlate) {
    this.carMake = carMake;
    this.model = model;
    this.yearOfRegistr = yearOfRegistr; 
    this.numberPlate = numberPlate;
}

Cars.prototype.ownerOfCar = function(owner) {
    if(owner.age >= 18) {
        this.owner = owner;
    } else {
        console.log(`${owner.name} you are not yet 18 years old`)
    }
};

Cars.prototype.infoAuto = function() {
        console.log(`Auto ${this.carMake} model ${this.model}, ${this.yearOfRegistr} year of registration. Number plate ${this.numberPlate}.`);
    if(this.owner) {
        this.owner.getInfo();
    } else
        console.log(`Not owner`);
      
}

const humanFirst = new Parent("Nadiia", 36);
//humanFirst.getInfo();
const carFirst = new Cars("Hyundai", "Tucson", 2020, "KA3325SV");
carFirst.ownerOfCar(humanFirst);
carFirst.infoAuto();

const humanSecond = new Parent("Tatyana", 17);
//humanSecond.getInfo();
const carSecond = new Cars("JAGUAR", "XF", 2022, "KI3578VA");
carSecond.ownerOfCar(humanSecond);
carSecond.infoAuto();

const humanThird = new Parent("Serhii", 30);
//humanThird.getInfo();
const carThird = new Cars("Nissan", "X-Trail", 2018, "VO7733VA");
carThird.ownerOfCar(humanThird);
carThird.infoAuto();