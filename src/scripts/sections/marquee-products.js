import '../../styles/sections/marquee-products.scss';
import { debounce } from '../utils/index.js';
import gsap from "gsap";

const SELECTORS = {
    list: '.js-marquee-products-list',
    item: '.js-marquee-item',
    price: '.js-product-price'
}

const setCloneItems = () => {
    const marqueeLists = document.querySelectorAll(SELECTORS.list);
    if (!marqueeLists.length) return;

    marqueeLists.forEach((marqueeList) => {
        const items = marqueeList.querySelectorAll(SELECTORS.item);
        if (!items.length) return;
        items.forEach(item => {
            const clone = item.cloneNode(true);
            marqueeList.appendChild(clone);
        });
    })    
}

const marqueeJsVariant = () => {
    const marqueeList = document.querySelector('[data-speed]');
    if (!marqueeList) return;    
    const speed = +marqueeList.dataset.speed;
    const formatSpeed = 40 - speed;
    let tl; 

    const initAnimation = () => {
        if (speed == 0) return;

        tl = gsap.timeline({ repeat: - 1 });
        const items = marqueeList.querySelectorAll(SELECTORS.item);

        let totalWidth = Array.from(items).reduce((sum, item) => {
            return sum + (item.offsetWidth || 0);
        }, 0);        

        tl.to(marqueeList,
            {
                duration: formatSpeed,
                ease: "none",
                x: -totalWidth / 2
            }
        );
    }

    setCloneItems();
    initAnimation();

    const handleResize = debounce(200, () => {
        // tl.restart();
        tl = null;
        initAnimation();
    });

    window.addEventListener('resize', () => {
        tl.pause();
        handleResize();
    });

    marqueeList.addEventListener('mouseover', () => {
        if (tl) {
            tl.pause();
        }
    });

    marqueeList.addEventListener('mouseout', () => {
        if (tl) {
            tl.play();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {

    setCloneItems();
    marqueeJsVariant();
    
    const priceElements = document.querySelectorAll(SELECTORS.price);

    priceElements.forEach((element) => {
        const productId = element.closest(SELECTORS.item).dataset.productId;
        if (productId) {
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(response => response.json())
                .then(data => {
                    element.textContent = `$${data.price.toFixed(2)}`;
                    element.removeAttribute('data-price-loading');
                })
                .catch(error => {
                    console.error('Error fetching price:', error);
                    element.textContent = 'Price unavailable';
                    element.removeAttribute('data-price-loading');
                });
        } else {
            element.textContent = 'Price unavailable';
            element.removeAttribute('data-price-loading');
        }
    });
});