const navSlide = () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const banner = document.querySelector('.banner');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navBlock = document.querySelector('nav');
    const logo = document.querySelector('.logo-box');
    const cta = document.querySelector('.cta-wrapper')
    const btn = document.querySelector('.btn-wrapper');
    const form = document.querySelector('.form-wrapper');
    const footer = document.querySelector('.footer');

    burger.addEventListener('click' , ()=>{
        html.classList.toggle('overflow');
        //body.classList.toggle('overflow');
        body.classList.toggle('nav-active');
        //navBlock.classList.toggle('slide-reverse');
        burger.classList.toggle('toggle');
        banner.classList.toggle('slide-reverse');
        body.classList.toggle('body-slide')
        nav.classList.toggle('slide-reverse')
        //logo.classList.toggle('body-slide');
        //burger.classList.toggle('body-slide');
        //cta.classList.toggle('body-slide')
        //btn.classList.toggle('body-slide');
        form.classList.toggle('body-slide');
        footer.classList.toggle('slide-reverse');
    });
}

navSlide();