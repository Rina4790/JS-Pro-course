// №1
// Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = arr.map(item => item ** 2)
// console.log(newArr)
// __________________________________________________
// №2
// Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let sum = arr.reduce((prev, curr) => prev + curr)
// console.log(sum)
// ____________________________________________________________________
// №3
// Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

// let num 
// function checkNum(num) {
// 	return num.toString().split('')
// 	.map((item, index, arr) => arr[index] % 2 == 1 && arr[index + 1] % 2 == 1 ? item + ':' : item)
// 	.join('')
// }
// console.log(checkNum(5567899311))
// _____________________________________________________________
// №4
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

// let arr1 = [1, 2, 3, 4, 5,]
// let arr2 = [5, 6, 7, 8, 9, 10]
// let arr3 = (arr1.length > arr2.length ? arr1 : arr2) //больший 
// let arr4 = (arr1.length < arr2.length ? arr1 : arr2) // меньший
// let newArr = arr3.map((item, index) => (arr4[index] === undefined) ? item : item - arr4[index]);
// console.log(newArr)
// ______________________________________________________________
// №5
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// let arr1 = [1, 2, 3, 4, 5, ]
// let arr2 = [5, 6, 7, 8, 9, 10]
// let arr3 = arr1.map((item, index) => (arr2[index] === undefined) ? item : item + arr2[index])
// console.log(arr3)
// _________________________________________________________
// №6
// Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

// let arr = [1, 2, 3]
// let newArr = arr.slice().reverse()
// console.log(arr, newArr)
// ________________________________________________________________
// №7
// Фильтр юзеров Создать массив объектов для юзеров. Пример:
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

// let arr = [{ name: "Ivan", age: 18 }, { name: "Petr", age: 12 }, { name: "Sidor", age: 25 }]
// let oldArr = arr.filter(item => item.age > 17)
// let yangArr = arr.filter(item => item.age < 18)
// console.log(oldArr, yangArr)
// _________________________________________________________

// №8
// Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

// let arr = [1, 1, 3, 5, 2, 3, 8, 2, 5, 5, 9, 3, 6, 7, 7]
// let newArr = Array.from(new Set(arr))
// console.log(newArr)
// ___________________________________________________________

// №9
// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

// let str
// function checkPalindrom(str) {
// 	let str2 = str.split('').reverse().join('')
// 	str === str2 ? console.log('This is Palindrom') : console.log('This is not Palindrom')
// }
// checkPalindrom("РЕПЕР")
//_____________________________________________________________________

// №10
// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

// let arr = [1, 1, 3, 5, 2, 3, 8, 2, 5, 5, 9, 3, 6, 7, 7]
// let num = 2

// function checkIndeks(arr, num) {
// 	let indexes = arr.flatMap((item, index) => item === num ? index : [])
// 	return indexes
// }
// console.log(checkIndeks(arr, num))
// _____________________________________________________________________

// Реализуйте класс Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя), secondName (фамилия), rate (ставка за день работы), days (количество отработанных дней) сountOfDetails(количество выполненных деталей). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, каждый из которых будет возвращать соответствующее поле в объекте. И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days. Добавить метод, который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0

// class Worker {
// 	constructor(name, secondName, rate, days, сountOfDetails) {
// 		this.name = name
// 		this.secondName = secondName
// 		this.rate = rate
// 		this.days = days
// 		this.сountOfDetails = сountOfDetails
// 	}
// 	getSalary() {
// 		return this.rate * this.days
// 	}
// 	getName() {
// 		return this.name
// 	}
// 	getSecondName() {
// 		return this.secondName
// 	}
// 	getRate() {
// 		return this.rate
// 	}
// 	getDays() {
// 		return this.days
// 	}

// 	setRate(rate) {
// 		if (rate === "") {
// 			return;
// 		}
// 		this.rate = rate;
// 	}
// 	setDays(days) {
// 		if (days === '') {
// 			return;
// 		}
// 		this.days = days;
// 	}
// 	moreCountOfDetails() {
// 		return this.сountOfDetails = this.сountOfDetails + 1
// 	}
// 	resetCountOfDetails() {
// 		return this.сountOfDetails =0
// 	}
// }

// let worker = new Worker("Vasya", "Spilberg", 10, 5, 100);
// worker.setDays('28') 
// worker.moreCountOfDetails()
// worker.resetCountOfDetails()

// console.log(worker, worker.getSalary())
// __________________________________________________________________________________

// Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы: getFullName, getEmail.

// class User {
// 	constructor(name, surname, email) {
// 		this.name = name
// 		this.surname = surname
// 		this.email = email
// 	}
// 	getFullName() {
// 		return this.name + ' ' + this.surname
// 	}
// 	getEmail() {
// 		return this.email
// 	}
// }

// let newUser = new User('Jone', 'Smit', 'js@gmail.com')
// console.log(newUser, newUser.getFullName())

// // Реализуйте класс Student, который будет наследовать класс User. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получить программно, используя объект Date

// class Student extends User {
// 	constructor(name, surname, year) {
// 		super(name, surname)
// 		this.year = year
// 	}
// 	getCourse() {
// 		let now = new Date();
// 		let nowYear = now.getFullYear()
// 		let course = nowYear - this.year
// 		let nowCourse
// 		if (course < 6) {
// 			nowCourse = course;
// 		}
// 		else {
// 			nowCourse = 'already not student'
// 		}
// 		return nowCourse
// 	}
// }

// let newStudent = new Student('Jane', 'Smit', 2019)
// console.log(newStudent, newStudent.getFullName(), newStudent.getCourse())
