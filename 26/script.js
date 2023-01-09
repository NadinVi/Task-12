// Дано три массива с объектами:
// Задача:
// Создать функцию-конструктор Product, которая принимает на вход аргументы category, type, price и 
//присваивать их полям объекта c соответствующим названием ключа.

// Каждому объекту созданному с помощью функции-конструктор Product доступна функция render, которая возвращает строку вида: 

// `<tr>
// 	<td><img src="images/kitchen/grater.svg" alt="grater" width="50" height="50"></td>
// 	<td>grater</td>
// 	<td>10 USD</td>
// </tr>`


// Все заданные продукты создаем с помощью функции-конструктор Product и для всех вызываем метод render().
// В результате необходимо отрендерить на странице таблицу с выводом данных о всех продуктах.

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100, 1000]
	},
	{
		type: 'laptop',
		price: [50, 1500]
	},
	{
		type: 'smartphone',
		price: [80, 2000]
	},
	{
		type: 'tablet',
		price: [20, 1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price) {
	this.category = category;
	this.type = type;
	this.price = price;
}

const grater = new Product("kitchen", "grater", "10");
const pastryBag = new Product("kitchen", "pastry-bag", "25");
const scale = new Product("kitchen", "scale", "15");

Product.prototype.render = function () {
	return `<tr>
		<td><img src="images//${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
		<td>${this.type}</td>
		<td>${this.price}</td>
		</tr>`
}

// function rendCategory(category, newArr) {
// 	const Trs = newArr
// 	.map(function(name) {
// 		return new Product(category, name.type, name.price)
// 	})	
// return Trs;
// }


document.write(`<table>
						<thead>
								<tr>
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
								</tr>
						</thead>
						<tbody>${grater.render()}
						${pastryBag.render()}
						${scale.render()}
						 </tbody>
				</table>
`)
