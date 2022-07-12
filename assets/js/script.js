const btnOpenMobile = document.querySelector('.btn-open-mobile')
const navWrapper = document.querySelector('.nav-wrapper')
const mobileNav = document.querySelector('.mobile-nav-links')
const closeBtnNav = document.querySelector('.mobile-btn')

btnOpenMobile.addEventListener('click', () => {
    navWrapper.classList.toggle('active')
    mobileNav.classList.toggle('active')
})

navWrapper.addEventListener('click', () => {
    closeBtnNav.addEventListener('click', () => {
        navWrapper.classList.contains.remove('active')
        mobileNav.classList.contains.remove('active')
    })
    navWrapper.classList.toggle('active')
    mobileNav.classList.toggle('active')
})