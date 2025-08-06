import '../../styles/sections/marquee-products.scss';
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

window.addEventListener("DOMContentLoaded", () => {

    const swiperElements = document.querySelectorAll(".js-marquee-products");
    if (!swiperElements.length) return;    

    swiperElements.forEach((swiperElement) => {
        const swiper = new Swiper(swiperElement, {
            modules: [Autoplay], 
            slidesPerView: 6,
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
            },     
        });  
    });  
});