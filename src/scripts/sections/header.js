import '../../styles/sections/header.scss';
import { onWindowScroll, exist } from '../utils/index.js';
import { drop } from '../snippets/drop-menu.js';

const SELECTORS = {
    header: '.js-header',
	menuTrigger: '.js-header-trigger',
};

const CLASSNAMES = {
	bodyOpenMenuState: 'body--open_menu_state',
	headerScrollState: 'header--scroll_state',
	bodyScrollPos: 'header--pos_state',
};

const header = () => {		
	const $body = document.body;
	const $header = document.querySelector(SELECTORS.header);
	const $announcementBar = document.querySelector('[data-announcement-bar]');
	const $menuTriggers = document.querySelectorAll(SELECTORS.menuTrigger);
	const $mainWrap = document.querySelector('.main');

	let isMenuOpen = false;
	let prevScrollPos = window.scrollY;
	const headerHeight = $header.clientHeight;
	const annonsmentBarHeight = $announcementBar.clientHeight;
	const headerGroup = headerHeight + annonsmentBarHeight;

	// console.log(headerGroup);

	const handleTriggerClick = () => {
		if (!isMenuOpen) {
			$body.classList.add(CLASSNAMES.bodyOpenMenuState);
			isMenuOpen = true;
		} else {
			$body.classList.remove(CLASSNAMES.bodyOpenMenuState);
			isMenuOpen = false;
		}
	};

	const headerScroll = (scrollY) => {
		
		if (scrollY > headerGroup && !$header.classList.contains(CLASSNAMES.headerScrollState)) {
			$header.classList.add(CLASSNAMES.headerScrollState);
			$mainWrap.classList.add(CLASSNAMES.headerScrollState);
			$header.style.opacity = 0;
			setTimeout(() => {
				$header.style.opacity = 1;
			}, 300);						
		} else if (scrollY <= annonsmentBarHeight && $header.classList.contains(CLASSNAMES.headerScrollState) || scrollY == 0) {
			$header.classList.remove(CLASSNAMES.headerScrollState);	
			$mainWrap.classList.remove(CLASSNAMES.headerScrollState);		
		}
		
		if (prevScrollPos < window.scrollY && scrollY > headerGroup) {
			$header.classList.add(CLASSNAMES.bodyScrollPos);
			
		} else {
			$header.classList.remove(CLASSNAMES.bodyScrollPos);
			
		}
		prevScrollPos = window.scrollY;
	};

	const initializeEventListeners = () => {
		if (!exist($menuTriggers)) return;

		$menuTriggers.forEach(($trigger) => {
			$trigger.addEventListener('click', () => {
				handleTriggerClick();
			});
		});
	};

	if (!$header) return;

	onWindowScroll(headerScroll);	
	initializeEventListeners();
};

document.addEventListener("DOMContentLoaded", () => {
    header();
	drop();
});

