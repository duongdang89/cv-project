
// MODE SELECT
var modeBtn = document.querySelector('.skin-mode i');
var skinMode = document.querySelector('.skin-mode');
var darkMode = false;

skinMode.addEventListener('click', function() {
    if(darkMode === false) {
        darkMode = true;
        DarkMode();
    }
    else {
        LightMode();
        darkMode = false;
    }
})

function DarkMode() {
    document.body.classList.add('dark');
    modeBtn.classList.remove('fa-moon');
    modeBtn.classList.add('fa-sun');
    modeBtn.setAttribute('title', 'Light Mode');
}

function LightMode() {
    document.body.classList.remove('dark');
    modeBtn.classList.add('fa-moon');
    modeBtn.classList.remove('fa-sun');
    modeBtn.setAttribute('title', 'Dark Mode');
}

//ANIMATION WHEN LOAD
var body = document.getElementById('body');
var app = document.getElementById('app');
var loader = document.getElementById('loader');
const banner = this.document.getElementById('home');
window.addEventListener('load', function() {
    app.style.display = 'block';
    loader.style.display = 'none';
    banner.classList.add('from-scale-0', 'show');
})

// SHOW ON SCROLL
var navbar = document.getElementById('navbar');
var fullHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var elementsToShow = document.getElementsByClassName('show-on-scroll');

function FixMenu(){
    if(window.pageYOffset > 10) {
        navbar.classList.add('navbar-sticky');
    }
    else {
        navbar.classList.remove('navbar-sticky');
    }
}

function ShowOnScroll(element, style) {
    var offset = element.offsetTop - fullHeight;
    element.style.animationDelay = element.getAttribute('animation-delay');
    if(window.pageYOffset > offset)
    {
        element.classList.add(style);
    }
}

// COUNT UP NUMBER
var elementsToCount = document.querySelectorAll('.achievement-wrapper h2');
var timeout;
function CountUp(ele, maxValue) {
    var value = 0;
    var step = maxValue/50;
    var counter = setInterval(function() {
        ele.innerText = value;
        value += step;
        if(value > maxValue) {
            clearTimeout(counter);
        }
    }, 50);
}

var counted = false;
window.onscroll = function() {
    FixMenu();
    for(let i = 0; i < elementsToShow.length; i++) {
        ShowOnScroll(elementsToShow[i], 'show');
    }
    // Count up
    if(window.pageYOffset > elementsToCount[0].offsetTop - fullHeight) {
        if(counted === false) {
            for(var ele of elementsToCount) {
                CountUp(ele, ele.getAttribute('value'));
            }
            counted = true;
        }
    } 
}

// FILTER
var portfolioItems = document.getElementsByClassName('portfolio-wrapper');
var portfolioBtns = document.getElementsByClassName('portfolio__menu-btn');

function Filter(btnElement) {
    for(var ele of portfolioItems) {
        if(btnElement.id === 'all') {
            ele.classList.remove('hide-fade');
            ele.classList.add('show-fade')
            continue;
        }
        if(ele.className.includes(btnElement.id)){
            ele.classList.remove('hide-fade');
            ele.classList.add('show-fade');
        }
        else {
            ele.classList.remove('show-fade');
            ele.classList.add('hide-fade');
        }
    }
}

function ClearActive() {
    for(var ele of portfolioBtns) {
        ele.classList.remove('btn-active');
    }
}

for(let i = 0; i < portfolioBtns.length; i++){
    portfolioBtns[i].addEventListener('click', function(){
        Filter(portfolioBtns[i]);
        ClearActive();
        portfolioBtns[i].classList.add('btn-active');
    });
}

//DETAIL PORTFOLIO
const fullOverlay = document.getElementById('full-overlay');
const portfolioImage = document.querySelector('.detail-portfolio img');
const btnDetailPortfolios = document.getElementsByClassName('overlay__btn');
const closeBtn = document.querySelector('.close-wrapper i');
const redCloseBtn = document.querySelector('.close-btn');

const titles = document.getElementsByClassName('portfolio__title');

function SetImageSourceFromLink(element) {
    var imageSrc = element.parentElement.previousElementSibling.firstElementChild.src;
    portfolioImage.src = imageSrc;
}

function ShowOverlay() {
    fullOverlay.classList.add('open-overlay');
    fullOverlay.classList.remove('close-overlay');
    body.style.overflow = 'hidden';
}

function SetImageSourceFromBtn(btn) {
    const parent = btn.parentElement;
    const previous = parent.previousElementSibling;
    const imageSrc = previous.src;
    portfolioImage.src = imageSrc;
}

function CloseOverlay() {
    fullOverlay.classList.add('close-overlay');
    body.style.overflow = 'scroll';
}

closeBtn.addEventListener('click', function() {
    CloseOverlay();
})

redCloseBtn.addEventListener('click', function() {
    CloseOverlay();
})

for(let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', function() {
        ShowOverlay();
        SetImageSourceFromLink(titles[i]);
    });
}

for(let i = 0; i < btnDetailPortfolios.length; i++) {
    btnDetailPortfolios[i].addEventListener('click', function() {
        SetImageSourceFromBtn(btnDetailPortfolios[i]);
        ShowOverlay();
    });
}


// CLIENTS CAROUSEL
$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical" 
});








