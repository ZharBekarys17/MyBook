// const PersonalizedCart =[
//     {
//         id:1,
//         imgUrl:'../assets/personolize/unesbe.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Утреннее сияние',
//         author:'Сара Джио',
//     },
//     {
//         id:2,
//         imgUrl:'../assets/personolize/mark.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
//         author:'Марк Мэнсон',
//     },
//     {
//         id:3,
//         imgUrl:'../assets/personolize/gogol.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Вий',
//         author:'Николай Гоголь',
//     },
//     {
//         id:4,
//         imgUrl:'../assets/personolize/thuleiha.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Зулейха открывает глаза',
//         author:'Гузель Яхина',
//     },
//     {
//         id:4,
//         imgUrl:'../assets/personolize/witcher.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Ведьмак',
//         author:'Андрей Сапковский',
//     },
//     {
//         id:5,
//         imgUrl:'../assets/personolize/unesbe.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Жажда',
//         author:'Ю Несбё',
//     },
//     {
//         id:6,
//         imgUrl:'../assets/personolize/Dan.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Происхождение ',
//         author:'Дэн Браун',
//     },
// ]
const url = 'https://65d7137927d9a3bc1d7a172d.mockapi.io/personalized'
fetch(url)
.then(response => response.json()) // accessing the API data as JSON
.then((data) =>{
    // getting the data
    const personalized = document.querySelector('.personalized-selection')
    data.forEach(book => {
        const card = createPcart(book)
        personalized.appendChild(card)
    })
})
.catch(error => console.error(error)) // handling error if something wrong happens
// const url = 'https://restcountries.com/v2/all' // countries api

// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     const countries = document.querySelector('.countries')
//     data.forEach(country => {
//       const card = createCountryCard(country)
//       countries.appendChild(card)
//     })
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens


let createPcart = (cardObj) =>{
    const {id, imgUrl, rating, name, author} = cardObj
    const cart = document.createElement('div')
    cart.classList.add('cart')

    const img = document.createElement('img')
    img.classList.add('perimg')
    img.src = imgUrl
    // img.alt = `${name}`

    const rate= document.createElement('p')
    rate.textContent = rating

    const title = document.createElement('p')
    title.classList.add('text-wrap')
    title.textContent = name

    const aut = document.createElement('p')
    aut.textContent = textwrap(author)

    cart.appendChild(img)
    cart.appendChild(rate)
    cart.appendChild(title)
    cart.appendChild(aut)
    title.addEventListener('click', () =>{
        window.location.href = `../cart-page/cartpage.html?id=${cardObj.id}`
    })
    title.addEventListener('mouseenter', ()=>{
        title.style.cursor= 'pointer'
    })
    title.addEventListener('mouseleave', ()=>{
        title.style.cursor = 'none'
    })
    return cart
}
const textwrap = (text, maxLength = 15) => {
    if (text.length <= maxLength) {
        return text;
    }
    const wrappedText = text.slice(0, maxLength - 3) + '...';
    return wrappedText;
};
// const personalcarts = document.querySelector('.personalized-selection')
// PersonalizedCart.forEach((books) =>{
//     personalcarts.appendChild(createPcart(books))
// } );