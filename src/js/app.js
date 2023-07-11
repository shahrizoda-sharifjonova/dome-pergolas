import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".options__swiper", {
    grabCursor: true,
    modules: [Pagination],
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination:{
        el: '.options__pagination',
        clickable: true,
    },
}); 

const menu = document.querySelector('.menu')
const content = document.querySelector('.header__content');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    content.classList.toggle('active')
    body.classList.toggle('hidden')
})

const loveBtns = document.querySelectorAll('.projects__love');

loveBtns.forEach(love=>{
    love.addEventListener('click', (e)=>{
        love.classList.toggle('active')
    })
})

const items = document.querySelectorAll('.orders__item');
items.forEach(item=>{
    item.addEventListener('click', (e)=>{
        items.forEach(itemtoremove=>{
            itemtoremove.classList.remove('active')
        })
        item.classList.toggle('active')
    })
})

const openbtns = document.querySelectorAll('.open-content');
const contents = document.querySelectorAll('.orders__content');

openbtns.forEach(openBtn =>{
    openBtn.addEventListener('click', (e)=>{
        contents.forEach(contenttoremove=>{
            contenttoremove.classList.remove('active')
        })
        const target = openBtn.getAttribute("data-target")
        document.querySelector(target).classList.add('active');
    })
})
