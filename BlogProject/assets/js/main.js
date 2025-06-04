// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`something went wrong, make sure that ${selector} is correct`)
}


//Nav styles on scroll

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated')
    }else {
        headerElement.classList.remove('activated')
    }
}

window.addEventListener('scroll', scrollHeader)

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon')

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu')
    if(!mobileMenu.classList.contains('activated')){
        mobileMenu.classList.add('activated')
    }else{
        mobileMenu.classList.remove('activated')
    }

    menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu)
// Open/Close search form popup

const formCloseBtn = selectElement('#form-close-btn')
const formOpenBtn = selectElement('#search-icon')

const toggleFrom = () => {
    const searchForm = selectElement('#search-form-container')
    searchForm.classList.toggle('activated')
}

formCloseBtn.addEventListener('click', toggleFrom)
formOpenBtn.addEventListener('click', toggleFrom)
window.addEventListener('keyup', e => e.key === 'Escape'? toggleFrom() : "")
// window.addEventListener('keyup', e => {
//     if(e.key === 'Escape') toggleFrom()
// })

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
const bodyElement = document.body
const themeToggleBtn = selectElement('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme')

if(currentTheme){
    bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme')

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive')
    }else {
        localStorage.removeItem('currentTheme')
    }
})
// Swiper