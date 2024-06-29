// Code for repeated Navigation bar 
//====================================================================
document.querySelector('header').innerHTML = `

<span> //  EK  //</span>
    
        <nav>
            <ul>
                <li><a href="#AboutMe">About</a></li>
                <li><a href="./cssReference.html">Portfolio</a></li>
                <li><a href="./javascriptRef.html">Contact</a></li>
                
            </ul>
        </nav>
`

//Code for Second Navigation Bar 
//=====================================================================
//function for generating each li Items 
/*
let linkArray = []

function generateliItems(title, location) {
    this._title = title,
        this._location = location
}
// Code for extrating information 

const locationItems = document.querySelectorAll('h1.title')
const titleItems = locationItems

for (let i = 0; i < locationItems.length; i++) {

    linkArray.push(new generateliItems(titleItems[i].innerHTML, locationItems[i].id))
}


// Push the extracted item into second nav as li 

let liArray = []
linkArray.forEach(item => {
    liArray.push(`<li><a href=#${item._location}>${item._title}</a></li>`)
}
);

// Modified the HTML code of secNav

document.getElementById('secNavItemContainer').innerHTML = liArray.join('')

//Code for adding arrow signs
let secNavLeftArrow = document.createElement('img')
secNavLeftArrow.setAttribute('src', './media/image/leftArrow.jpg')
secNavLeftArrow.setAttribute('class', 'left')

let secNavRightArrow = document.createElement('img')
secNavRightArrow.setAttribute('src', './media/image/rightArrow.jpg')
secNavRightArrow.setAttribute('class', 'right')

document.querySelector('#secNavItemContainer').insertAdjacentElement('beforebegin', secNavLeftArrow)
document.querySelector('#secNavItemContainer').insertAdjacentElement('afterend', secNavRightArrow)

// control the display of the arrow
let viewportWidth = window.innerWidth
function updateViewportWidth() {
    viewportWidth = window.innerWidth
}
const secNavItems = document.getElementById('secNavItemContainer')


window.addEventListener('load', controlArrowVisibility)
window.addEventListener('resize', controlArrowVisibility)

function controlArrowVisibility() {
    updateViewportWidth()
    const imgItem = document.querySelector('nav.secNav').querySelectorAll('img')
    if (secNavItems.scrollWidth > viewportWidth - 50) {

        imgItem.forEach(item => {
            item.style.display = 'block'
            arrowAppear = true
        }
        )
    } else {
        imgItem.forEach(item => {
            item.style.display = 'none'
            arrowAppear = false
        }
        )
    }

}


// control the arrow action
secNavLeftArrow = document.querySelector('img.left')
secNavRightArrow = document.querySelector('img.right')
//let arrowAppear = true
let scrollSteps = viewportWidth / 2
var navScrollingArea = 0


function updateScrollSteps() {
    scrollSteps = viewportWidth / 2
}

secNavLeftArrow.addEventListener('click', scrollingLeft);
secNavRightArrow.addEventListener('click', scrollingRight);


function scrollingLeft() {
    updateViewportWidth()
    updateScrollSteps()
    if (navScrollingArea + scrollSteps < secNavItems.scrollWidth) {

        navScrollingArea += scrollSteps
        secNavItems.style.left = `-${navScrollingArea}px`

    }
}

function scrollingRight() {
    updateViewportWidth()
    updateScrollSteps()
    if (navScrollingArea - scrollSteps >= 0) {

        navScrollingArea -= scrollSteps
        secNavItems.style.left = `-${navScrollingArea}px`

    }
}

*/