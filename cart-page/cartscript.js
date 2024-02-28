const cartinfo =[
    {
        id:1,
        imgUrl:'../assets/personolize/unesbe.jpg',
        rating:`⭐4.35 (7 825 оценки)`,
        pages:265,
        readingtime:7,
        year:2016,
        age:16,
        name:'Утреннее сияние',
        author:'Сара Джио',
    },
    {
        id:2,
        imgUrl:'../assets/personolize/mark.jpg',
        rating:`⭐4.37 (33 473 оценки)`,
        pages:158,
        readingtime:4,
        year:'2017',
        age:16,
        name:'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
        author:'Марк Мэнсон',
    },
    {
        id:3,
        imgUrl:'../assets/personolize/gogol.jpg',
        rating:`⭐4.37 (33 473 оценки)`,
        pages:41,
        readingtime:2,
        year:2008,
        age:12,
        name:'Вий',
        author:'Николай Гоголь',
    },
    {
        id:4,
        imgUrl:'../assets/personolize/thuleiha.jpg',
        rating:`⭐4.37 (33 473 оценки)`,
        pages:395,
        readingtime:10,
        year:2015,
        age:16,
        name:'Зулейха открывает глаза',
        author:'Гузель Яхина',
    },
    {
        id:5,
        imgUrl:'../assets/personolize/witcher.jpg',
        rating:`⭐4.37 (33 473 оценки)`,
        pages:2485,
        readingtime:63,
        year:2014,
        age:16,
        name:'Ведьмак',
        author:'Андрей Сапковский',
    },
    {
        id:6,
        imgUrl:'../assets/personolize/unesbe.jpg',
        rating:`⭐4.37 (33 473 оценки)`,
        pages:511,
        readingtime:13,
        year:2017,
        age:18,
        name:'Жажда',
        author:'Ю Несбё',
    },
    {
        id:7,
        imgUrl:'../assets/personolize/Dan.jpg',
        rating:`⭐4.37 (33 473 оценки)`,
        pages:465,
        readingtime:12,
        year:2018,
        age:16,
        name:'Происхождение ',
        author:'Дэн Браун',
    },
]


const url = window.location.href
console.log(url)

const id = url.split("id=")[1]
console.log(id)

const book = cartinfo.find(bk => bk.id == id)
console.log(book)


{/* <div class="header-left">
        <div class="inline-block">
            <img src="" alt="" id="inblock">
        </div>
        <img src="" alt="img" id="backimg">
    </div>
    
    <div class="header-center">
        <div class="maket">
            <p><b>Премиум</b></p>
            <p id="rating"></p>
        </div>
        <h1 id="title"></h1>
        <p id="author"></p>
        <div class="header-center-info">

        </div>
        <div class="yellow-block">
            <h5>По подписке</h5>
            <h4>549</h4>
            <p>Доступно ко всем книгам и аудиокнигам от 1 месяца</p>
            <button style="background-color: rgb(237, 92, 2); color: white; border-radius: 5px; border: none;">Первый 14 дней бесплатно</button>
        </div>
    </div> */}


const link = 'https://65dc5ad4e7edadead7ebb756.mockapi.io/bookinfo'
let createHside = (book) =>{
    const {id, imgUrl, rating, pages, readingtime, year, age, name, author} = book
    const hleft = document.createElement('div')
    hleft.classList.add('header-left')
    
    const inlineBlock = document.createElement('div')
    inlineBlock.classList.add('inline-block')

    const img = document.createElement('img')
    img.src = imgUrl
    img.alt = `${name}`

    const hcenter = document.createElement('div')
    hcenter.classList.add('header-center')

    const maket = document.createElement('div')
    maket.classList.add('maket')

    const justp = document.createElement('p')
    justp.textContent = 'Премиум'

    const rate = document.createElement('p')
    rate.textContent = rating


    const pgs = document.createElement('p')
    pgs.textContent = `${pages} печатных страниц`

    const rtime = document.createElement('p')
    rtime.textContent = readingtime

    const published = document.createElement('p')
    published.textContent = `${year} год`

    const needage = document.createElement('p')
    needage.textContent = age +'+'

    title = document.createElement('h1')
    title.textContent = name
    const writer = document.createElement('p')
    writer.textContent = author

    inlineBlock.appendChild(img)
    hleft.appendChild(inlineBlock)

    maket.appendChild(justp)
    maket.appendChild(rate)
    hcenter.appendChild(maket)
    hcenter.appendChild(title)
    hcenter.appendChild(writer)

    const yellowBlock = document.createElement('div')
    yellowBlock.classList.add('yellow-block')
    const h5 = document.createElement('h5')
    h5.textContent = 'По подписке'

    const cost = document.createElement('h4')
    cost.textContent = '549 ₸'

    const anotherp = document.createElement('p')
    anotherp.textContent = 'Доступно ко всем книгам и аудиокнигам от 1 месяца'

    const button = document.createElement('button')
    button.classList.add('yellow-button')
    button.textContent = 'Первый 14 дней бесплатно'

    yellowBlock.appendChild(h5)
    yellowBlock.appendChild(cost)
    yellowBlock.appendChild(anotherp)
    yellowBlock.appendChild(button)
}
createHside(link)
const backimg = document.querySelector("#backimg")
backimg.src = book.imgUrl
const rate  = document.querySelector('#rating')
rate.textContent = book.rating

const title = document.querySelector('#title')
title.textContent = book.name

const writer = document.querySelector('#author')
writer.textContent = book.author

//  <div class="header-center-info">
const centerInfo = document.querySelector('.header-center-info')

const pages = document.createElement('p')
pages.textContent = `${book.pages} печатных страниц`

const rtime = document.createElement('p')
rtime.textContent = `Время чтения ≈ ${book.readingtime}ч`
const published = document.createElement('p')
published.textContent = `${book.year} год`

const age = document.createElement('p')
age.textContent = book.age +'+'
centerInfo.appendChild(pages)
centerInfo.appendChild(rtime)
centerInfo.appendChild(published)
centerInfo.appendChild(age)