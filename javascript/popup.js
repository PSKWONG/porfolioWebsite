// ========================== Expand  / Minimize Button for each section 
//---Create Element (Expand Button) 
let expandButtonElement = document.createElement('img')
expandButtonElement.setAttribute('src', './media/image/zoomOutIcon.svg')
expandButtonElement.setAttribute('class', 'zoomBtn expandBtn')

//---Create Element (Minimise Button) 
let minimiseButtonElement = document.createElement('img')
minimiseButtonElement.setAttribute('src', './media/image/zoomInICON.svg')
minimiseButtonElement.setAttribute('class', 'zoomBtn closeBtn')
minimiseButtonElement.setAttribute('style', 'display: none;')


const sectionTitle = document.querySelectorAll('h1.title')

sectionTitle.forEach(title => {
    title.before(expandButtonElement);
    title.before(minimiseButtonElement);
})

// ========================== Register onClick function to the expan button 
//---- Declare Variables for the expanded sections 
const expandButton = document.querySelectorAll('img.expandBtn')


var targetExpandSection
var targetPositionInfo
var targetHiddenSection
var triggeredExpandbutton
var triggeredClosebutton

expandButton.forEach(button => {

    // Set the initial value for the parameters 
    button.addEventListener('mousedown', function (event) {

        targetExpandSection = event.target.parentNode
        targetPositionInfo = targetExpandSection.getBoundingClientRect().top
        targetHiddenSection = targetExpandSection.querySelector('.expand')
        triggeredExpandbutton = targetExpandSection.querySelector('.expandBtn')
        triggeredClosebutton = targetExpandSection.querySelector('.closeBtn')
        targetExpandSection.style.position = "absolute";
        targetExpandSection.style.top = `${targetPositionInfo}px`;
    })

    // Set the target value for the parameters 
    button.addEventListener('click', function (event) {
        targetExpandSection.style.minHeight = '100%';
        targetExpandSection.style.top = "0px";
        targetExpandSection.style.zIndex = 11;
        targetHiddenSection.style.display = 'flex';
        triggeredExpandbutton.style.display = "none";
        triggeredClosebutton.style.display = 'block';
        setTimeout(() => {
            targetHiddenSection.style.opacity = 1
        }, 800
        )
    })
})

// ========================== Register onClick function to the expan button



// extracting expand information to container 
/*
const expandButton = document.querySelectorAll('input.expandBtn')
const popupContainer = document.querySelector('#popupcontainer')
*/




/*
// ========================== Pop Up container 

// Create the outter Most Container 
let expandContainer = document.createElement('div');
expandContainer.setAttribute('id', 'popupcontainer');

// Create  the Display Container 
let displayContainer = document.createElement('section');
displayContainer.setAttribute('id', 'sectiondisplay');


expandContainer.append(displayContainer);
document.body.append(expandContainer);


// Create  the Close Button 
let initDisplayCloseButton = document.createElement('img');
initDisplayCloseButton.setAttribute('src', './media/image/closeIcon.png');
initDisplayCloseButton.setAttribute('id', 'displayclosebtn')

// Append the Close Button 
function appendCloseButton() {
    displayContainer.insertBefore(initDisplayCloseButton, displayContainer.firstChild);
}

function resetDisplayContainer() {
    displayContainer.innerHTML = `<p>No Content</p>`
    appendCloseButton()
}


resetDisplayContainer();





// Set the dimension of the container 

//let displayheight = window.innerHeight
//let displaywidth = window.innerWidth




// ========================== Expand Button for each section 
const expandSection = document.querySelectorAll('section.expand')

expandSection.forEach(section => {
    let expandButtonElement = document.createElement('input')
    expandButtonElement.setAttribute('type', 'button')
    expandButtonElement.setAttribute('class', 'expandBtn')
    expandButtonElement.setAttribute('value', 'Expand')

    section.after(expandButtonElement)
})

// extracting expand information to container 

const expandButton = document.querySelectorAll('input.expandBtn')
const popupContainer = document.querySelector('#popupcontainer')

// Register onClick function to the expan button 
expandButton.forEach(button => {

    button.addEventListener('click', function (event) {
        let targetExpandInfo = event.target.previousElementSibling.innerHTML;
        document.querySelector('#sectiondisplay').innerHTML = targetExpandInfo;
        appendCloseButton()
        registerCloseButton()

        popupContainer.style.zIndex = 21;
        popupContainer.style.width = '100%';
        popupContainer.style.height = '100%';
        popupContainer.style.opacity = '100%';



    })

})

// Register onClick function to the close button 
let displayCloseButton = document.querySelector('#displayclosebtn');

function registerCloseButton() {

    displayCloseButton = document.querySelector('#displayclosebtn');
    displayCloseButton.addEventListener('click', function () {
        popupContainer.style.width = '0%';
        popupContainer.style.height = '0%';
        popupContainer.style.opacity = '0%';
        setTimeout(function(){
            popupContainer.style.zIndex = -1;
            resetDisplayContainer();
        },1500 )
        

    })
}
*/