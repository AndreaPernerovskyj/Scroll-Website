
const menuOp = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')

// Display Mobile Menu
const mobileMenu = () => {
	menuOp.classList.toggle('is-active')
	menuLinks.classList.toggle('active')
}
menuOp.addEventListener('click', ()=> {
	mobileMenu()
})

// Show active menu when scrolling
const hightlighMenu = () => {
	const elem = document.querySelector('.highlight')
	const homeMenu = document.querySelector('#home-page')
	const aboutMenu = document.querySelector('#about-page')
	const servicesMenu = document.querySelector('#services-page')
	let scrollPos = window.scrollY
	// console.log(scrollPos);
	// adds 'higlight' class to my menu items
	if(window.innerWidth > 960 && scrollPos < 600){
		homeMenu.classList.add('highlight')
		aboutMenu.classList.remove('highlight')
		return
	}else if (window.innerWidth > 960 && scrollPos < 1400){
		aboutMenu.classList.add('highlight')
		homeMenu.classList.remove('highlight')
		servicesMenu.classList.remove('highlight')
		return
	}else if (window.innerWidth > 960 && scrollPos < 2345){
		aboutMenu.classList.remove('highlight')
		servicesMenu.classList.add('highlight')
		return
	}

	if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
		elem.classList.remove('highlight')
	}
}

window.addEventListener('scroll', ()=> {
	hightlighMenu()
})
window.addEventListener('click', ()=> {
	hightlighMenu()
})

// const homeMenu = document.querySelector('#home-page')
// const aboutMenu = document.querySelector('#about-page')
// const servicesMenu = document.querySelector('#services-page')
// const signUpMenu = document.querySelector('#sign-up')

// homeMenu.addEventListener('click', ()=> {
// 	if(window.innerWidth < 960){
// 		menuLinks.classList.toggle('active')
// 		menuOp.classList.toggle('is-active')
// 	}
// })
// aboutMenu.addEventListener('click', ()=> {
// 	if(window.innerWidth < 960){
// 		menuLinks.classList.toggle('active')
// 		menuOp.classList.toggle('is-active')
// 	}
// })
// servicesMenu.addEventListener('click', ()=> {
// 	if(window.innerWidth < 960){
// 		menuLinks.classList.toggle('active')
// 		menuOp.classList.toggle('is-active')
// 	}
// })
// signUpMenu.addEventListener('click', ()=> {
// 	if(window.innerWidth < 960){
// 		menuLinks.classList.toggle('active')
// 		menuOp.classList.toggle('is-active')
// 	}
// })
// navLogo.addEventListener('click', ()=> {
// 	if(window.innerWidth < 960){
// 		menuLinks.classList.toggle('active')
// 		menuOp.classList.toggle('is-active')
// 	}
// })
const hideMobileMenu = () => {
	const menuBars = document.querySelector('.is-active')
	if(window.innerWidth <= 960 && menuBars){
		menuLinks.classList.toggle('active')
		menuOp.classList.toggle('is-active')
	}
}
menuLinks.addEventListener('click' , hideMobileMenu)
navLogo.addEventListener('click' , hideMobileMenu)
