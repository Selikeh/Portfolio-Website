const dateElement = document.getElementById('date')
const btn = document.getElementById('menu-btn')
const mobileNav = document.getElementById('mobile-menu')
const header = document.getElementById('header')
const moreLessBtn = document.getElementById('moreLessBtn') //might need to us a class instead down the line
let scrollTrigger = 20

let dateYear = new Date().getFullYear()

dateElement.innerText = dateYear + ' '

btn.addEventListener('click', navToggle)

const body = document.getElementsByTagName('main')[0]

window.addEventListener('scroll', (e)=>{
    if(window.scrollY >= scrollTrigger){
        header.classList.replace('bg-slate-700', 'bg-slate-800')
    }else{
        header.classList.replace('bg-slate-800', 'bg-slate-700')
    }
})

moreLessBtn.addEventListener('click', e=>showMoreLess(e))

function navToggle(){
    btn.classList.toggle('open')
    mobileNav.classList.toggle('hide')
    document.body.classList.toggle('overflow-hidden')
}

function showMoreLess(e){
    e.target.parentElement.getElementsByClassName('3Dots')[0].classList.toggle('hidden')
    e.target.parentElement.getElementsByClassName('extraText')[0].classList.toggle('hidden')
    e.target.parentElement.getElementsByTagName('button')[0].innerText === 'show more'? e.target.parentElement.getElementsByTagName('button')[0].innerText = 'show less':e.target.parentElement.getElementsByTagName('button')[0].innerText = 'show more'
}