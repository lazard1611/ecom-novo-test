import '../../styles/sections/hero.scss';

import Swiper from "swiper";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
const heroSlider = () => {
    
    const SELECTORS = {
        slider: '.js-hero-slider',
        pagination: '.js-hero-slider-pagination',
        prev: '.js-hero-slider-prev',
        next: '.js-hero-slider-next'
    }

    const slider = new Swiper(SELECTORS.slider, {        
        modules: [Pagination, Navigation, EffectFade, Autoplay],
        slidesPerView: 1,        
        effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        pagination: {
            el: SELECTORS.pagination,
            clickable: true
        },
        navigation: {
            nextEl: SELECTORS.next,
            prevEl: SELECTORS.prev
        }
    });    

    if (window.slider_autoplay !== '0') {      
        slider.params.autoplay = {
            delay: window.slider_autoplay * 1000            
        }    
        slider.autoplay.start();
    }
}

window.addEventListener(("DOMContentLoaded"), () => {
    heroSlider();
});