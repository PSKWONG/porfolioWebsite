// ========================== Expand  / Minimize Button for each section 
//---Create Element (Expand Button) 
let createExpandButtonElement = function () { 
    let expandButtonElement = document.createElement('img');
    expandButtonElement.setAttribute('src', './media/image/zoomOutIcon.svg')
    expandButtonElement.setAttribute('class', 'zoomBtn expandBtn')
    return expandButtonElement
}

//---Create Element (Minimise Button) 
let createMinimiseButtonElement = function () {
    let minimiseButtonElement = document.createElement('img')
    minimiseButtonElement.setAttribute('src', './media/image/zoomInICON.svg')
    minimiseButtonElement.setAttribute('class', 'zoomBtn closeBtn')
    minimiseButtonElement.setAttribute('style', 'display: none;')
    return minimiseButtonElement
}


const sectionTitle = document.querySelectorAll('h1.title')

sectionTitle.forEach(title => {
    title.before(new createExpandButtonElement);
    title.before(new createMinimiseButtonElement);
})

// ========================== Create StyleSheet Element
const popupStyleSheet = document.createElement('link');
popupStyleSheet.setAttribute('href', './style/popup.css')
popupStyleSheet.setAttribute('rel', 'stylesheet')
popupStyleSheet.setAttribute('id', 'popupStyleSheet')






// ========================== Declare Variables for the expanded sections  
const expandButton = document.querySelectorAll('img.expandBtn')
const closeButton = document.querySelectorAll('img.closeBtn')


var targetExpandSection
var targetPositionInfo
var targetHiddenSection
var triggeredExpandbutton
var triggeredClosebutton
var initialExpandsectionHeight
// ========================== Register onClick function to the expan  
expandButton.forEach(button => {

    // Set the initial value for the parameters 
    button.addEventListener('mousedown', function (event) {

        document.head.append(popupStyleSheet)
        targetExpandSection = event.target.parentNode
        targetPositionInfo = targetExpandSection.getBoundingClientRect().top + window.scrollY
        initialExpandsectionHeight = targetExpandSection.style.minHeight
        targetHiddenSection = targetExpandSection.querySelector('.expand')
        triggeredExpandbutton = targetExpandSection.querySelector('.expandBtn')
        triggeredClosebutton = targetExpandSection.querySelector('.closeBtn')

        targetExpandSection.style.zIndex = 11;
        targetExpandSection.style.top = `${targetPositionInfo}px`;
        targetExpandSection.style.position = "fixed";
        targetExpandSection.style.fontSize = '1rem'
        setTimeout(() => {
            
            targetExpandSection.style.transitionDuration = '1.5s';
            //targetExpandSection.style.minHeight = '100%';
            targetExpandSection.style.top = "0";
            targetExpandSection.style.bottom = "0";
            
            targetHiddenSection.style.display = 'flex';
            triggeredExpandbutton.style.display = "none";
            triggeredClosebutton.style.display = 'block';
            targetExpandSection.style.fontSize = '1.3rem'
        }, 100)

        setTimeout(() => {
            targetHiddenSection.style.opacity = 1
        }, 800
        )
    })

})

// ========================== Register onClick function to the close 
closeButton.forEach(button => {
    // Set the initial value for the parameters 
    button.addEventListener('click', function (event) {

        targetHiddenSection.style.transitionDuration= '0.5s'
        targetHiddenSection.style.opacity = 0
        targetExpandSection.style.top = `${targetPositionInfo}px`;
        targetExpandSection.style.minHeight = initialExpandsectionHeight;
        triggeredExpandbutton.style.display = "block";
        triggeredClosebutton.style.display = 'none';
        targetExpandSection.style.fontSize = '1rem'
        setTimeout(() => {
            targetHiddenSection.style.display = 'none';
            let popupStyleSheet = document.querySelector('#popupStyleSheet');
            popupStyleSheet.remove();

        }, 100
        )
        setTimeout(() => {
            targetExpandSection.style.transitionDuration = '0s';
            targetExpandSection.style.position = "relative";
            targetExpandSection.style.top = "0px";
            targetExpandSection.style.zIndex = 1;
        }, 1400
        )

    })
})


// extracting expand information to container 
/*
const expandButton = document.querySelectorAll('input.expandBtn')
const popupContainer = document.querySelector('#popupcontainer')
*/



