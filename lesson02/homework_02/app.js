// 1
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).

// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => resolve(console.log('done')), 3000);
// })

// 2
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).\

// let promise2 = new Promise(function(resolve, reject) {
// 	setTimeout(() => reject(new Error("Whoops!")), 3000);
// });

// 3
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.

// Promise.all([
// 	new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
// 	new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
// 	new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ])
// 	.then((values) => {
// 		console.log(values)
// 		let sum = values.reduce((prev, curr) => prev + curr)
// 		console.log(sum)
// 		document.body.append(`Сумма массива результатов : ${sum}`)
// })


// 4
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.

// let users = fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((response) => {
// 		console.log(response)
// 	return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 		let arr = data.filter((item) => item.id % 2 == 0)
// 		console.log(arr)
// 	})

// 5
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1

// let users = fetch('https://jsonplaceholder.typicode.com/users')
// 	.then((response) => response.json())
// 	.then((value) => {
// 		console.log(value)
// 		let div_id = document.createElement('div')
// 		div_id.dataset.id = '1'
// 		div_id.style.display = ('flex')
// 		div_id.style.flexWrap = ('wrap')
// 		value.forEach((item) => {
// 			let divUsers = document.createElement('div')
// 			divUsers.style.margin = ('20px')
// 			console.log(item)
// 			divUsers.innerHTML = `name :${item.name},<br> username: ${item.username},<br> email: ${item.email}, <br> phone: ${item.phone}, <br> website: ${item.website}`
// 			div_id.append(divUsers)
// 		})
// 		document.body.append(div_id)
// 	})

// 6
// Дополнить задание 5. Добавить инпут и кнопку Поиск. Сделать так, чтобы по нажатию на кнопку поиска списке оставались только те карточки, которые соответствуют введенному тексту (фильтрацию проводить по имени, телефону, email).

// const input = document.createElement('input')
// const btn = document.createElement('button')
// btn.innerText = ('Search')
// document.body.append(input, btn)
// let div_id = document.createElement('div')
// div_id.id = '1'
// div_id.style.display = ('flex')
// div_id.style.flexWrap = ('wrap')
// let url = ('https://jsonplaceholder.typicode.com/users')

// function searchUsers(search, url) {
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then((value) => {
// 			value.forEach((item) => {
// 				if (item.name.includes(search) || item.phone.includes(search) || item.email.includes(search) || search === '') {
// 					console.log(item)
// 					let divUsers = document.createElement('div')
// 					divUsers.style.margin = ('20px')
// 					divUsers.innerHTML = `name :${item.name},<br> username: ${item.username},<br> email: ${item.email}, <br> phone: ${item.phone}, <br> website: ${item.website}`
// 					div_id.append(divUsers)
// 				}
// 			})
// 		document.body.append(div_id)
// 		})
// }

// document.addEventListener('DOMContentLoaded', (event) => {
// 	searchUsers('', url)																																		
// 	})

// btn.addEventListener('click', (event) => {
// 	let search = input.value
// 	div_id.innerHTML = ''
// 	searchUsers(search, url)
// 	input.value = ''																								
// })

// 7
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users/${userId}/todos, userId получить при помощи prompt. Вывести todo list пользователя, отобразить текст тудушки и индикатор выполнена она или нет (чекбокс). Вывести в html внутри div с id = 2

// let userId = prompt('userId', 5)
// let url = (`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
// let div_id = document.createElement('div')
// div_id.id = '2'

// fetch(url)
// 	.then((response) => response.json())
// 	.then((value) => {
// 		console.log(value)
// 		value.forEach((item) => {
// 			let divUsers = document.createElement('div')
// 			let p = document.createElement('p')
// 			divUsers.style.display = ('flex')
// 			divUsers.style.alignItems = ('center')
// 			p.innerHTML = item.title
// 			let checkbox = document.createElement('input');
// 			checkbox.type = "checkbox";
// 			divUsers.append(p, checkbox)
// 			div_id.append(divUsers)
// 			if (item.completed == true) {
// 				checkbox.checked = true
// 			}
// 		})
// 		document.body.append(div_id)
// 	})

// 8
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото

// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3

// let div_id = document.createElement('div')
// div_id.id = '3'
// let imageData
// let url = ('https://jsonplaceholder.typicode.com/albums/1/photos')

// fetch(url)
// 	.then((response) => response.json())
// 	.then((value) => {
// 		console.log(value)
// 		imageData = value
// 		value.forEach((item) => {
// 			let image = document.createElement('img')
// 			image.dataset.id = item.id
// 			image.src = item.thumbnailUrl
// 			div_id.append(image)
// 		})
// 	document.body.append(div_id)
// })

// div_id.addEventListener('click', (event) => {
// 	let target = event.target; 
// 	if (target.tagName != 'IMG') return;
// 	let imgId = target.dataset.id
// 	console.log(imgId)
// 	target.classList.toggle('bigImg')
// 	if (target.classList.contains('bigImg')) {
// 		target.src = imageData[imgId-1].url
// 	} else {
// 		target.src = imageData[imgId-1].thumbnailUrl
// 	}
// })

// 9
// Сделать запрос альбомов при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums, Отобразить список альбомов и сделать там, чтобы по нажатию на альбом вместа списка альбомов отобразились фотографии, которые относяться к этому альбому(https://jsonplaceholder.typicode.com/photos). В списке альбомов добавить кнопку Назад, по нажатию на которую переходим обратно на список альбомов. Вывести в html внутри div с id = 4

// let btn = document.createElement('button')
// btn.style.display = ('block')
// btn.innerText = 'Назад'

// let div_album = document.createElement('div')
// let div_photos = document.createElement('div')
// div_album.id = '4'

// btn.addEventListener('click', (event) => {
// 	div_photos.style.display = ('none')
// 	div_album.style.display = ('block')
// })

// fetch('https://jsonplaceholder.typicode.com/albums')
// 	.then((response) => response.json())
// 	.then((value) => {
// 		console.log(value)
// 		value.forEach((item) => {
// 			let album = document.createElement('div')
// 			album.style.margin = ('15px')
// 			album.innerHTML = item.title
// 			album.dataset.id = item.id
// 			div_album.append(album)
// 		})
// 		document.body.append(div_album)
// })

// let url = ('https://jsonplaceholder.typicode.com/photos')

// div_album.addEventListener('click', (event) => {
// 	div_photos.innerHTML = ''
// 	div_album.style.display = ('none')
// 	let dataId= event.target.dataset.id
// 	console.log(dataId)
// 	photoAlbum(dataId, url)
// 	div_photos.style.display = ('block')
// })


// function photoAlbum(dataId, url) {
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then((value) => {
// 			div_photos.append(btn)
// 			console.log(value)
// 			value.forEach((item) => {
// 				if (item.albumId == dataId) {
// 					console.log(item)
// 					let img = document.createElement('img')
// 					img.src = item.thumbnailUrl
// 					console.log(item.thumbnailUrl)
// 					div_photos.append(img)
// 				}
// 			})
// 		})
// 		document.body.append(div_photos)
// }

