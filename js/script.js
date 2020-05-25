/* Slider */
const slides = document.querySelectorAll('.slider-block__slide'),
      prev = document.querySelector('.slider-block__prev img'),
      next = document.querySelector('.slider-block__next'),
      pointsBlock = document.querySelector('.points');            

let slideIndex = 1;

for (let i = 0; i < slides.length; i++) {
    let point = document.createElement('div');
    point.classList.add('points__point');
    pointsBlock.appendChild(point);    
}

const points = document.querySelectorAll('.points__point');

showSlide(slideIndex);
let timerId = setInterval( () => {
    plusSlide(1);
}, 3000);

points.forEach( (point, index) => {
    point.addEventListener('click', () => {        
        showSlide(slideIndex = index + 1);
        clearInterval(timerId);
        timerId = setInterval( () => {
        plusSlide(1);
        }, 3000);
    })
})

function showSlide(index) {
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < points.length; i++) {        
        if (i == slideIndex - 1) {
            for (let j = 0; j < points.length; j++) {
                points[j].classList.remove('points__point_active');    
            }            
            points[i].classList.add('points__point_active');            
        }
    }
   
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider-block__slide_show');
    }
    slides[slideIndex - 1].classList.add('slider-block__slide_show');
}

function plusSlide(index) {
    showSlide(slideIndex += index);
}

prev.addEventListener('click', () => {
    plusSlide(-1);
    clearInterval(timerId);
    timerId = setInterval( () => {
        plusSlide(1);
    }, 3000);
})

next.addEventListener('click', () => {
    plusSlide(1);
    clearInterval(timerId);
    timerId = setInterval( () => {
        plusSlide(1);
    }, 3000);
})


const tabsItem = document.querySelectorAll('.tabs-block__item'),
      tabs = document.querySelectorAll('.tabs-block__tab');

let tabIndex = 0;

showTab(tabIndex);

function showTab(index) {
    tabs.forEach( tab => tab.classList.remove('tabs-block__tab_active') );
    tabsItem.forEach( tab => tab.classList.remove('tabs-block__item_active') );

    for (let i = 0; i < tabs.length; i++) {
        if (i == index) {
            tabs[i].classList.add('tabs-block__tab_active');
            tabsItem[i].classList.add('tabs-block__item_active');
        }
    }
}

tabsItem.forEach( (item, index) => {
    item.addEventListener('click', () => {
        tabIndex = index;
        showTab(tabIndex);
    })
})


const sidebar = document.getElementById('sidebar'),
      up = document.querySelector('.up img');
document.addEventListener('scroll', () => {
    if (pageYOffset > 161) {
        sidebar.classList.add('fixed');
        up.classList.add('show');
    }
    if (pageYOffset < 161) {
        sidebar.classList.remove('fixed');
        up.classList.remove('show');
    }    
})


up.addEventListener('click', () => scrollTo(0, 0) );

const colorElements = document.getElementsByClassName('theme'),
      changeTheme = document.querySelector('.theme__change');

changeTheme.addEventListener('click', () => {
    for (let i = 0; i < colorElements.length; i++) {
        colorElements[i].classList.toggle('light-theme');
        colorElements[i].classList.toggle('dark-theme');
    }
})
