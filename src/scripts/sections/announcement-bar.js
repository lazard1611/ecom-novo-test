import '../../styles/sections/announcement-bar.scss';
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

const setHeightAnnouncementVar = () => {
    const $announcementBar = document.querySelector('[data-announcement-bar]');
    if (!$announcementBar) return;	 
	const annonsmentBarHeight = $announcementBar.clientHeight;
    document.body.style.setProperty('--announcement-bar-height', annonsmentBarHeight + 'px');
}

window.addEventListener("DOMContentLoaded", () => {
    const swiperElement = document.querySelector("#announcement-bar-swiper");

    if (!swiperElement) return;    

    const swiper = new Swiper(swiperElement, {
        modules: [Autoplay], 
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },     
    });
    
    setHeightAnnouncementVar();
});