

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
const gridItemOfBody = document.body.querySelectorAll('.gridItem')


const expandButton = document.querySelectorAll('img.expandBtn')
const closeButton = document.querySelectorAll('img.closeBtn')


var windowHeight = () => document.documentElement.clientHeight;
var beforeExapndWindowsHeight = windowHeight()



var initalRowtemplateArray = []
var finalRowtemplateArray = []


var targetExpandSection
var targetPositionInfo
var targetHiddenSection
var triggeredExpandbutton
var triggeredClosebutton
var initialExpandsectionHeight

// ========================== Define the Grid Structure Template of the body Element 
function resetBodyGridView() {
    let array =[]
    for (let i = 0; i < gridItemOfBody.length; i++) {
        array.push('auto')
    }
    document.body.style.gridTemplateRows = `${array.join(' ')}`
};
resetBodyGridView();



// ========================== Register onClick function to the expan  
expandButton.forEach(button => {

    // Set the initial value for the parameters 
    button.addEventListener('mousedown', function (event) {

        // Declare the variable 
        // Declare the variable 
        targetExpandSection = event.target.parentNode
        targetHiddenSection = targetExpandSection.querySelector('.expand')
        triggeredExpandbutton = targetExpandSection.querySelector('.expandBtn')
        triggeredClosebutton = targetExpandSection.querySelector('.closeBtn')

        //Set the z-index of Expand section 
        targetExpandSection.style.zIndex = 11;

        // Set the Inital grid-template-row Value 

        for (let i = 0; i < gridItemOfBody.length; i++) {
            let containerHeight = gridItemOfBody[i].offsetHeight
            initalRowtemplateArray.push(`${Math.ceil((containerHeight / windowHeight()) * 100)}vh`)
        }


        // Set the Final grid-template-row Value 
        
        for (let i = 0; i < gridItemOfBody.length; i++) {
            if (gridItemOfBody[i].id === targetExpandSection.id) {
                finalRowtemplateArray.push('100vh')
                continue
            }
            finalRowtemplateArray.push('0vh')
        }

        document.body.style.gridTemplateRows = `${initalRowtemplateArray.join(' ')}`

        // Adding Styling
        setTimeout(() => {
            document.head.append(popupStyleSheet)
            targetHiddenSection.style.display = 'block';
            targetExpandSection.style.overflowY = 'scroll';
        }, 500
        )

        setTimeout(() => {
            document.body.style.gridTemplateRows = `${finalRowtemplateArray.join(' ')}`
        }, 500
        )

        setTimeout(() => {
            targetHiddenSection.style.opacity = 1
            // Control button Swapping
            triggeredExpandbutton.style.display = "none";
            triggeredClosebutton.style.display = 'block';
        }, 500
        )
    })

})

// ========================== Register onClick function to the close 


closeButton.forEach(button => {

    button.addEventListener('click', function (event) {

        // Set the Final grid-template-row Value 
        let indexOfWindowsSizeChanging = windowHeight()/beforeExapndWindowsHeight
        for ( let i = 0 ; i< finalRowtemplateArray.length; i++){
            finalRowtemplateArray[i] = (initalRowtemplateArray[i].split('').filter(char => !isNaN(char) && char !== ' ').join(''))*indexOfWindowsSizeChanging + 'vh'
        }

        document.body.style.gridTemplateRows = `${finalRowtemplateArray.join(' ')}`
              
        setTimeout(() => {
            triggeredExpandbutton.style.display = "block";
            triggeredClosebutton.style.display = 'none';
            targetHiddenSection.style.display = 'none';
            let popupStyleSheet = document.querySelector('#popupStyleSheet');
            popupStyleSheet.remove();
            

        }, 100
        )
        
        setTimeout(() => {
            resetBodyGridView();
            targetExpandSection.style.overflowY = 'visible';

            targetExpandSection.style.zIndex = 1;

            initalRowtemplateArray = []
            finalRowtemplateArray = []
        }, 1400
        )
        

    })
})



// extracting expand information to container 
/*
const expandButton = document.querySelectorAll('input.expandBtn')
const popupContainer = document.querySelector('#popupcontainer')
*/



