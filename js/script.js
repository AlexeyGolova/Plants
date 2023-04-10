let navItem = document.querySelectorAll('.nav__item');
let nav = document.querySelector('nav');

function hideActive() {
    navItem.forEach(item => {
        item.classList.remove('active');
    });
}
function showActive(i = 0) {
    navItem[i].classList.add('active');
}
hideActive();
showActive();
nav.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('nav__item')) {
        navItem.forEach((item, i) => {
            if (target == item) {
                hideActive();
                showActive(i);
            }
        });
    }
});
let tabs = document.querySelectorAll('.tabs__item');
let tabsContent = document.querySelectorAll('.tabs__content');
let tabsParent = document.querySelector('.tabs__items');
let tabsBtn = document.querySelector('.tabs__btn');
let tabsWrapper = document.querySelector('.tabs__wrap');
let tabsHref = document.querySelector('.tabs__href');

function openBtn() {
    tabsWrapper.classList.add('open', 'fade');
    tabsHref.textContent = 'Hide';
}
function closeBtn() {
    tabsWrapper.classList.remove('open');
    tabsHref.textContent = 'View All';
}
tabsBtn.addEventListener('click', function() {
        if (tabsWrapper.classList.contains('open') == false) {
            openBtn();
        } else {
            closeBtn();
        }
});

function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
        item.classList.remove('tabs__item_active');
    });
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabs__item_active');
}
hideTabContent();
showTabContent();
tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    closeBtn();
	if(target && target.classList.contains('tabs__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
                }
                });
    }
});

let feedback = document.querySelector('.says__feedback');
let feedbackTwo = document.querySelector('.says__feedback_two');
let arrowLeft = document.querySelector('.says__arrows_left');
let arrowRight = document.querySelector('.says__arrows_right');

function hideFeedback () {
    feedbackTwo.classList.add('none');
}
hideFeedback();
arrowRight.addEventListener('click', function() {
    feedback.classList.add('none');
    feedbackTwo.classList.remove('none');
    feedbackTwo.classList.add('fade');
});
arrowLeft.addEventListener('click', function() {
    feedbackTwo.classList.add('none');
    feedback.classList.remove('none');
    feedback.classList.add('fade');
});
let formBtn = document.querySelector('.form__btn');
let form = document.querySelector('.form__input');

const popupSub = document.getElementById('popup__sub');
const popupSubContent = document.getElementById('popup__content__sub');
const popupSubClose = document.getElementById('popup__close__sub');
const areaSub = document.getElementById('area__sub');

const showSub = function() {
    popupSub.style.opacity = '1';
    popupSub.style.visibility = 'visible';
    popupSubContent.style.opacity = '1';
    popupSubContent.style.transform = 'transform: translate(0, 0)';
};
const hideSubContant = function() {
    popupSub.style.opacity = '0';
    popupSub.style.visibility = 'hidden';
    popupSubContent.style.opacity = '0';
    popupSubContent.style.transform = 'transform: translate(0, -100%)';
};
areaSub.addEventListener('click', function() {
    hideSubContant();
});
popupSubClose.addEventListener('click', function() {
    hideSubContant();
});


formBtn.addEventListener('click', function() {
    if(form.value !== '') {
        form.value = '';
        showSub(); 
    }
});

const popupHref = document.querySelectorAll('.popup__href');
const popupThanks = document.getElementById('popup__thanks');
const popupContent = document.getElementById('popup__content');
const popupClose = document.getElementById('popup__close');
const dot = document.getElementById('dot');
const area = document.getElementById('area');
let loginInput = document.querySelector('.login__input');


const showThanksContant = function () {
    popupThanks.style.opacity = '1';
    popupThanks.style.visibility = 'visible';
    popupContent.style.opacity = '1';
    popupContent.style.transform = 'transform: translate(0, 0)';
};

popupHref.forEach(item => {
    item.addEventListener('click', function() {
        let b = loginInput.value;
        if (b !== '') {
            showThanksContant();
        } else {
            loginInput.style.border = '2px solid red';
        }
    });
});

const hideThanksContant = function() {
    popupThanks.style.opacity = '0';
    popupThanks.style.visibility = 'hidden';
    popupContent.style.opacity = '0';
    popupContent.style.transform = 'transform: translate(0, -100%)';
};
area.addEventListener('click', function() {
    hideThanksContant();
});
popupClose.addEventListener('click', function() {
    hideThanksContant();
});


