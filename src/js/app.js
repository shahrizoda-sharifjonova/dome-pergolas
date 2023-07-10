import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

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