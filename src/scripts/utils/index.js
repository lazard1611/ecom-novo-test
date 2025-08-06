export const exist = (elementOrArray) => {
    if (!elementOrArray && elementOrArray !== 0) return false;
    if (elementOrArray.length === 0) {
        return false;
    }
    return true;
};

export function debounce(delay, fn) {
    let timerId;
    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}

export function debounceImmediate(delay, fn) {
    let fired = false;
    return (...args) => {
        if (!fired) {
            fn(...args);
            fired = true;
            setTimeout(() => {
                fired = false;
            }, delay);
        }
    };
}

export const isTouchDevice = () => {
    return (
        'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
    );
};

export const calcRemValue = ({windowWidth, windowHeight}) => {
    const remValue =
        windowWidth * 0.5625 > windowHeight ? (windowHeight / 800) * 10 : (windowWidth / 1440) * 10;

    document.documentElement.style.setProperty('--rem', `${remValue}px`);
};

export const calcMobileRemValue = ({windowHeight}) => {
    const mobileRemValue = (windowHeight / 800) * 10;

    document.documentElement.style.setProperty('--mobile-rem', `${mobileRemValue}px`);
};

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

export function isFunction(func) {
    return func instanceof Function;
}

export function getWindowSize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return {
        windowWidth,
        windowHeight,
    };
}

export const onWindowResize = (cb) => {
    if (!cb && !isFunction(cb)) return;

    const handleResize = () => {
        cb();
    };

    window.addEventListener('resize', debounce(15, handleResize));

    handleResize();
};

export const detectUsersOS = () => {
    if (window.navigator.userAgent.indexOf('Win') !== -1) return 'Windows OS';
    if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Macintosh';
    if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux OS';
    if (window.navigator.userAgent.indexOf('Android') !== -1) return 'Android OS';
    if (window.navigator.userAgent.indexOf('like Mac') !== -1) return 'iOS';

    return null;
};

export const onWindowChangeOrientation = (cb) => {
    if ((!cb && !isFunction(cb)) || !isTouchDevice()) return;

    let {windowWidth} = getWindowSize();

    const handleResize = () => {
        const {windowWidth: newWindowWidth} = getWindowSize();

        if (windowWidth !== newWindowWidth) cb();

        windowWidth = newWindowWidth;
    };

    window.addEventListener('resize', debounce(100, handleResize));
};

export const onWindowScroll = (cb) => {
    if (!cb && !isFunction(cb)) return;

    const handleScroll = () => {
        cb(window.pageYOffset);
    };

    window.addEventListener('scroll', debounce(15, handleScroll));

    handleScroll();
};

export const documentReady = (cb) => {
    if (!cb && !isFunction(cb)) return;
    document.addEventListener('DOMContentLoaded', cb);
};

export const pageLoad = (cb) => {
    if (!cb && !isFunction(cb)) return;
    window.addEventListener('load', () => {
        window.loaded = true;
        cb();

        window.onWindowLoadCallbacks?.forEach((cbLocal) => {
            if (!cbLocal && !isFunction(cbLocal)) return;
            cbLocal();
        });
        window.onWindowLoadCallbacks = [];
    });
};

export const page = (cb) => {
    return cb;
    // if (!cb && !isFunction(cb)) return;

    // if (window.loaded) {
    // 	cb();
    // } else {
    // 	if (!window.onWindowLoadCallbacks) window.onWindowLoadCallbacks = [];
    // 	window.onWindowLoadCallbacks.push(cb);
    // }
};

export const changeElementClassByStatus = (element, status, useClass) => {
    if (!element) return console.log(element, "changeElementClassByStatus, element's use class is " + useClass);

    if (status) element.classList.add(useClass);
    else element.classList.remove(useClass);
}

export const changeElementClassByClassContains = (element, useClass) => {
    if (!element) return console.log(element, "changeElementClassByClassContains, element's use class is " + useClass);

    if (element.classList.contains(useClass)) element.classList.remove(useClass);
    else element.classList.add(useClass);
}

export const getObjectOfElements = (objectOfSelectors, byParent = false) => {
    let fountByElement = document;
    let parentKey;

    const getResult = (key) => {
        const result = document.querySelectorAll(objectOfSelectors[key]);
        return result.length > 1 ? result : result[0];
    }

    if (byParent && Object.values(objectOfSelectors)[0]) {
        fountByElement = document.querySelector(Object.values(objectOfSelectors)[0]);
        parentKey = Object.keys(objectOfSelectors)[0];

        Object.values(objectOfSelectors)[0] = fountByElement;
    }

    Object.keys(objectOfSelectors).forEach((key) => {
        if (key === parentKey) objectOfSelectors[key] = getResult(key);
        else objectOfSelectors[key] = getResult(key)
    });

    return objectOfSelectors;
}

export const priceTransform = (price, withoutCents = false) => {
    if (withoutCents) return "€" + (price / 100).toFixed(0).replace(".", ",");
    else return "€" + (price / 100).toFixed(2).replace(".", ",");
};