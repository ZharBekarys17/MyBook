
const options = [
    {
        icon:"book",
        amount:561000,
        product: 'книг',
    },
    {
        icon:"headset-outline",
        amount:226000,
        product: 'аудиокниг',
    },
    {
        icon:"star-outline",
        amount:+2000,
        product: 'новинок каждый месяц',
    },
    {
        icon:"extension-puzzle-outline",
        amount:'Подборки',
        product: 'и рекомендации',
    },
]
let creatOPcards = (cardObj)=>{
    const {icon, amount, product} = cardObj

    const card = document.createElement("div")
    card.classList.add("card")
   
    // card.innerHTML = ''

    const ic = document.createElement("ion-icon")
    ic.classList.add("ic")
    ic.name = icon

    const amounts = document.createElement("h2")
    amounts.textContent = amountSpace(amount)

    const products = document.createElement("h5")
    products.textContent = product

    card.appendChild(ic)
    card.appendChild(amounts)
    card.appendChild(products)

    return card

}
function amountSpace(amount) {
    let amountStr = String(amount);
    if (amountStr.length > 4 && typeof amount == "number") {
        const amountSlices = [];
        for (let i = amountStr.length - 3; i >= 0; i-=3) {
            amountSlices.unshift(amountStr.slice(i > 0 ? i : 0, i + 3));
            amountStr = amountStr.slice(0, i);
        }
        amountSlices.unshift(amountStr);
        amountStr = amountSlices.join(" ")
    }
    return amountStr;
  }

//   const card = localStorage.getItem('card')
//   const cardItem = JSON.parse(card) || []
  
const cards = document.querySelector(".header-cards");

options.forEach((product) => {
    cards.appendChild(creatOPcards(product));
});

// const PersonalizedCart =[
//     {
//         id:1,
//         imgUrl:'assets/personolize/unesbe.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Утреннее сияние',
//         author:'Сара Джио',
//     },
//     {
//         id:2,
//         imgUrl:'assets/personolize/mark.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
//         author:'Марк Мэнсон',
//     },
//     {
//         id:3,
//         imgUrl:'assets/personolize/gogol.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Вий',
//         author:'Николай Гоголь',
//     },
//     {
//         id:4,
//         imgUrl:'assets/personolize/thuleiha.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Зулейха открывает глаза',
//         author:'Гузель Яхина',
//     },
//     {
//         id:4,
//         imgUrl:'assets/personolize/witcher.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Ведьмак',
//         author:'Андрей Сапковский',
//     },
//     {
//         id:5,
//         imgUrl:'assets/personolize/unesbe.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Жажда',
//         author:'Ю Несбё',
//     },
//     {
//         id:6,
//         imgUrl:'assets/personolize/Dan.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Происхождение ',
//         author:'Дэн Браун',
//     },
// ]
// let createPcart = (cardObj) =>{
//     const {id, imgUrl, rating, name, author} = cardObj
//     const cart = document.createElement('div')
//     cart.classList.add('cart')

//     const img = document.createElement('img')
//     img.classList.add('perimg')
//     img.src = imgUrl
//     // img.alt = `${name}`

//     const rate= document.createElement('p')
//     rate.textContent = rating

//     const title = document.createElement('p')
//     title.classList.add('text-wrap')
//     title.textContent = name

//     const aut = document.createElement('p')
//     aut.textContent = textwrap(author)

//     cart.appendChild(img)
//     cart.appendChild(rate)
//     cart.appendChild(title)
//     cart.appendChild(aut)
//     title.addEventListener('click', () =>{
//         window.location.href = `cart-page/cartpage.html?id=${cardObj.id}`
//     })
//     title.addEventListener('mouseenter', ()=>{
//         title.style.cursor= 'pointer'
//     })
//     title.addEventListener('mouseleave', ()=>{
//         title.style.cursor = 'none'
//     })
//     return cart
// }
// const textwrap = (text, maxLength = 15) => {
//     if (text.length <= maxLength) {
//         return text;
//     }
//     const wrappedText = text.slice(0, maxLength - 3) + '...';
//     return wrappedText;
// };
// const personalcarts = document.querySelector('.personalized-selection')
// PersonalizedCart.forEach((books) =>{
//     personalcarts.appendChild(createPcart(books))
// } );

const bookchoose = document.querySelector('#whattochoose')
bookchoose.addEventListener('click', () =>{
    window.location.href = 'what-to-choose/whattochoose.html'
})
bookchoose.addEventListener('mouseenter', ()=>{
    bookchoose.style.cursor= 'pointer'
})
bookchoose.addEventListener('mouseleave', ()=>{
    bookchoose.style.cursor = 'none'
})
let createBuisnesss = (book) =>{
    const {id, imgUrl, rating, name, author} = book
    const cart = document.createElement('div')
    cart.classList.add('cart')

    const img = document.createElement('img')
    img.classList.add('perimg')
    img.src = imgUrl
    img.alt = `${name}`

    const rate= document.createElement('p')
    rate.textContent = rating

    const title = document.createElement('p')
    title.classList.add('text-wrap')
    title.textContent = name

    const aut = document.createElement('p')
    aut.textContent = author

    cart.appendChild(img)
    cart.appendChild(rate)
    cart.appendChild(title)
    cart.appendChild(aut)
    // title.addEventListener('click', () =>{
    //     window.location.href = `../cart-page/cartpage.html?id=${book.id}`
    // })
    title.addEventListener('mouseenter', ()=>{
        title.style.cursor= 'pointer'
    })
    title.addEventListener('mouseleave', ()=>{
        title.style.cursor = 'none'
    })
    return cart
}
// const buisnessCards = [
//     {
//         id:1,
//         imgUrl:'assets/buisness/positive org.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Позитивная организация',
//         author:'Роберт Куинн',
//     },
//     {
//         id:2,
//         imgUrl:'assets/personolize/unesbe.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'assets/buisness/two dads.jpg',
//         author:'Роберт Кийосаки',
//     },
//     {
//         id:3,
//         imgUrl:'assets/buisness/trust.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Доверие',
//         author:'Игорь Манн',
//     },
//     {
//         id:4,
//         imgUrl:'assets/buisness/kids world.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Детский мир: перезагрузка. Реальная история компании, без которой у нас было бы другое детство',
//         author:'Лаборатория «Однажды»',
//     },
//     {
//         id:5,
//         imgUrl:'assets/buisness/one minute.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Переговоры за минуту. Экспресс-курс делового общения',
//         author:'Эдуард Трымбовецкий',
//     },
//     {
//         id:6,
//         imgUrl:'assets/buisness/story brand.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Воронки продаж по методу StoryBrand: Пошаговое руководство',
//         author:'Donald Miller',
//     },
//     {
//         id:7,
//         imgUrl:'assets/buisness/economic.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Экономика. Для тех, кто про нее не может слышать',
//         author:'Сергей Нечаев',
//     },
//     {
//         id:8,
//         imgUrl:'assets/buisness/redactore.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Я, редактор. Настольная книга для всех, кто работает в медиа',
//         author:'Николай Кононов',
//     },
//     {
//         id:9,
//         imgUrl:'assets/buisness/buisness on finger.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Бизнес на пальцах. Развитие навыков управления, продаж и маркетинга за 60 дней',
//         author:'Роберт Куинн',
//     },
//     {
//         id:10,
//         imgUrl:'assets/buisness/way.jpg',
//         rating:'⭐⭐⭐⭐',
//         name:'Путь: как ускорить продвижение к финансовой свободе',
//         author:'Тони Роббинс',
//     },
// ]
const url2 = 'https://65d7137927d9a3bc1d7a172d.mockapi.io/buisness'
fetch(url2)
.then(response  => response.json())
.then((data) =>{
    // getting the data
    const buisness = document.querySelector('.buisness-cards')
    data.forEach(book => {
        const card = createBuisnesss(book)
        buisness.appendChild(card)
    })
})
.catch(error => console.error(error)) // handling error if something wrong happens