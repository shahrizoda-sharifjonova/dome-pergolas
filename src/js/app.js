import * as functions from "./modules/functions.js";
import $ from 'jquery'

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

new Swiper(".reviews__swiper", {
    grabCursor: true,
    modules: [Navigation,Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    watchSlidesProgress: true,
    navigation:{
        prevEl: '.reviews__btn-prev',
        nextEl: '.reviews__btn-next',
    },
    breakpoints:{
        575:{
            slidesPerView: 2,
        }
    }
}); 

new Swiper(".accordion__swiper", {
    grabCursor: true,
    modules: [Pagination],
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination:{
        el: '.accordion__pagination',
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

if(document.querySelector('.quest')){
    const buttons = document.querySelectorAll('.quest__btn');
    const items = document.querySelectorAll('.quest__item');
    buttons.forEach(btn => { 
        btn.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('active')
            })
            btn.classList.add('active')
            const target = btn.getAttribute('data-target')
            const el = document.querySelector(`#${target}`);
            items.forEach(item => {
                item.classList.remove('active')
            })
            el.classList.add('active')
        })
    })
}

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".accordion__content")
          .slideUp(200);
      } else {
        $(".accordion > .accordion__button").removeClass("active");
        $(this).addClass("active");
        $(".accordion__content").slideUp(200);
        $(this)
          .siblings(".accordion__content")
          .slideDown(200);
      }
    });
  });