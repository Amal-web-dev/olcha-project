const body = document.body
const header = document.createElement('header')
const container = document.createElement('div')
const headerTop = document.createElement('div')
const headerBottom = document.createElement('div')
const left = document.createElement('div')
const right = document.createElement('div')
let btnWhiteOne = document.createElement('button')
let btnRedOne = document.createElement('button')
let btnWhiteTwo = document.createElement('button')
let cardText = document.createElement('p')
let phoneNumber = document.createElement('p')
let btnSell = document.createElement('button')
let hr = document.createElement('hr')
let languageOne = document.createElement('p')
let languageTwo = document.createElement('p')
let languageThree = document.createElement('p')
let hrTwo = document.createElement('hr')
const languageSwitcher = document.createElement('div')
let h1 = document.createElement('h1')
let btnBurger = document.createElement('button')
let imgBurger = document.createElement('img')
let textBurger = document.createElement('p')
let inputSearch = document.createElement('input')
let btnSearch = document.createElement('button')
let imgSearch = document.createElement('img')
const allIcon = document.createElement('div')
let allRedIconOne = document.createElement('div')
let allRedIconTwo = document.createElement('div')
let allRedIconThree = document.createElement('div')
let allRedIconFour = document.createElement('div')
let comperisonIcon = document.createElement('img')
let heartIcon = document.createElement('img')
let basketIcon = document.createElement('img')
let signInIcon = document.createElement('img')
let comperisonText = document.createElement('p')
let heartText = document.createElement('p')
let basketText = document.createElement('p')
let signInText = document.createElement('p')

header.classList.add('header')
container.classList.add('container')
headerTop.classList.add('header-top')
headerBottom.classList.add('header-bottom')
left.classList.add('left')
right.classList.add('right')
btnWhiteOne.classList.add('btn-header-white')
btnRedOne.classList.add('btn-header-red')
btnWhiteTwo.classList.add('btn-header-white')
cardText.classList.add('p-header-card')
phoneNumber.classList.add('phone-number')
btnSell.classList.add('btn-sell')
languageSwitcher.classList.add('language-switcher')
languageOne.classList.add('language')
languageTwo.classList.add('language-2')
languageTwo.classList.add('active')
languageThree.classList.add('language')
btnBurger.classList.add('btn-burger')
inputSearch.classList.add('inp-search')
btnSearch.classList.add('btn-search')
allIcon.classList.add('all-icon')
allRedIconOne.classList.add('all-red-icon')
allRedIconOne.classList.add('comperison')
allRedIconTwo.classList.add('all-red-icon')
allRedIconThree.classList.add('all-red-icon')
allRedIconFour.classList.add('all-red-icon')
comperisonIcon.classList.add('comperison-icon')
heartIcon.classList.add('heart-icon')
basketIcon.classList.add('basket-icon')
signInIcon.classList.add('sign-in-icon')

comperisonIcon.src = './icon/7119818_growth_diagram_comparison_graph_information_icon.png'
heartIcon.src = './icon/211754_heart_icon.png'
basketIcon.src = './icon/2784211_basket_business_finance_money_icon.png'
signInIcon.src = './icon/392531_account_friend_human_man_member_icon.png'
comperisonText.innerHTML = 'Сравнениe'
heartText.innerHTML = 'Избранныe'
basketText.innerHTML = 'Корзина'
signInText.innerHTML = 'Войти'
btnWhiteOne.innerHTML = '0% Рассрочка'
btnRedOne.innerHTML = 'Скидки'
btnWhiteTwo.innerHTML = 'Розыгрыши'
cardText.innerHTML = 'Карта сайта'
phoneNumber.innerHTML = '+998 (71) 202 20 21'
btnSell.innerHTML = 'Продавайте на olcha'
languageOne.innerHTML = 'Ўзб'
languageTwo.innerHTML = 'Рус'
languageThree.innerHTML = 'Eng'
h1.innerHTML = 'olcha'
textBurger.innerHTML = 'Каталог'
imgBurger.src = './icon/6351905_burger_checklist_list_menu_navigation_icon.png'
imgSearch.src = './icon/search.2a234c15.svg'

body.prepend(header)
header.append(container)
container.append(headerTop, headerBottom)
headerTop.append(left, right)
left.append(btnWhiteOne, btnRedOne, btnWhiteTwo, cardText)
right.append(phoneNumber, btnSell, hr, languageSwitcher, hrTwo)
languageSwitcher.append(languageOne, languageTwo, languageThree);
headerBottom.append(h1, btnBurger, inputSearch, btnSearch, allIcon)
btnBurger.append(imgBurger, textBurger)
btnSearch.append(imgSearch)
allIcon.append(allRedIconOne, allRedIconTwo, allRedIconThree, allRedIconFour)
allRedIconOne.append(comperisonIcon, comperisonText)
allRedIconTwo.append(heartIcon, heartText)
allRedIconThree.append(basketIcon, basketText)
allRedIconFour.append(signInIcon, signInText)







languageSwitcher.addEventListener('click', (event) => {
    if (event.target.tagName === 'P') {
      languageSwitcher.querySelectorAll('p').forEach((item) => {
        item.classList.remove('active');
      });
      event.target.classList.add('active');
    }
  });

//   allRedIconOne.onclick = () => {
//     allRedIconOne.classList.add('btn-change-bg')
//     comperisonIcon.classList.add('img-invert')
//   }




  let allRedIcons = [allRedIconOne, allRedIconTwo, allRedIconThree, allRedIconFour];

allRedIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    allRedIcons.forEach(function(icon) {
      icon.classList.remove('btn-change-bg');
    });
    icon.classList.add('btn-change-bg');
  });
});


let scrollPosition = 0;

window.addEventListener('scroll', function() {
  let currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentPosition >= 260) {
    header.classList.add('hidden');
    headerBottom.style.position = 'fixed';
    headerBottom.style.top = '0'
    headerBottom.classList.add('header-bottom-pos')
  } else {
    header.classList.remove('hidden');
    headerBottom.style.position = 'static';
    headerBottom.style.top = 'auto'
    headerBottom.classList.remove('header-bottom-pos')
  }

  scrollPosition = currentPosition;
});


const deadLine = '2023-05-03 00:00'

function getTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
     days = Math.round((t / 1000) / 60 / 60 / 24),
     hours = Math.round((t / 1000) / 60 / 60 % 24),
     minutes = Math.round((t / 1000) / 60 % 60 ),
     seconds = Math.round((t / 1000) % 60)


    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function showTime(endTime, selector) {
    const timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds')
               interval = setInterval(setTime , 1000)

               function setTime() {
                const t = getTime(endTime)
                // days.innerHTML = t.days
                hours.innerHTML  = t.hours
                minutes.innerHTML = t.minutes
                seconds.innerHTML = t.seconds
               }

}

showTime(deadLine, '.timer')
console.log(getTime(deadLine)); 




const backToTopBtn = document.querySelector('#back-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    backToTopBtn.style.bottom = '80px'; // измените значение, если нужно
  } else {
    backToTopBtn.style.bottom = '20px'; // измените значение, если нужно
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});