

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
//const navigationLinkItems = document.querySelector('ul').querySelectorAll('li')
const gridItemOfBody = document.body.querySelectorAll('.gridItem') // Find the ITem with specific class name 

const display = document.getElementById('displayWrapper');
const contentWP = document.getElementById('contentWrapper');



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

/* Old Version 
function resetBodyGridView() {
    let array = []
    for (let i = 0; i < gridItemOfBody.length; i++) {
        if (i == 0) {
            array.push('430px')
        } else {
            array.push('minmax(115px,1fr)')
        }
    }
    document.body.style.gridTemplateRows = `${array.join(' ')}`

};
*/
function resetBodyGridView() {

    display.className = "normalDW";
    contentWP.className = "normalCW";
}

resetBodyGridView();



// ========================== Register onClick function to the expan  
// Expanding section Function 

function expandingContentContainer(event) {

    // Declare the variable 
    //let targetExpandSectionWrapper = event.target.parentNode.parentNode.parentNode
    targetExpandSection = event.target.parentNode
    targetHiddenSection = targetExpandSection.querySelector('.expand')
    triggeredExpandbutton = targetExpandSection.querySelector('.expandBtn')
    triggeredClosebutton = targetExpandSection.querySelector('.closeBtn')

    //Set the z-index of Expand section 
    targetExpandSection.style.zIndex = 21;


    // Set the Final grid-template-row Value 

    for (let i = 0; i < gridItemOfBody.length; i++) {
        if (gridItemOfBody[i].id === targetExpandSection.id) {
            finalRowtemplateArray.push('1fr')
        } else {
            finalRowtemplateArray.push('0fr')
        }
    }


    targetHiddenSection.style.display = 'block';
    //targetExpandSection.style.overflowY = 'scroll';
    document.documentElement.style.setProperty('--targetContentPortion',finalRowtemplateArray.join(' '));
    //  document.body.style.gridTemplateRows = `${finalRowtemplateArray.join(' ')}`

    // document.body.style.gridTemplateRows = `${initalRowtemplateArray.join(' ')}`

    display.className = "normalDW expanDW";
    contentWP.className = "normalCW expandCW ";



    // Adding Styling
    setTimeout(() => {

        document.head.append(popupStyleSheet)
        targetExpandSection.style.opacity = 1;
    }, 500
    )



    setTimeout(() => {
        // Control button Swapping
        triggeredExpandbutton.style.display = "none";
        triggeredClosebutton.style.display = 'block';
    }, 500
    )

}

// --- registered the button for expanding function 
expandButton.forEach(button => {

    // Set the initial value for the parameters 
    button.addEventListener('click', expandingContentContainer

    )

})

// ========================== Register onClick function to the close


closeButton.forEach(button => {

    button.addEventListener('click', function (event) {

        let popupStyleSheet = document.querySelector('#popupStyleSheet');
        popupStyleSheet.remove();

        setTimeout(() => {
            resetBodyGridView();
        }, 500
        )

        setTimeout(() => {
            triggeredExpandbutton.style.display = "block";
            triggeredClosebutton.style.display = 'none';

           // targetExpandSection.style.overflowY = 'hidden';
            //targetHiddenSection.style.display = 'none';
            //targetExpandSection.style.zIndex = 1;

            initalRowtemplateArray = []
            finalRowtemplateArray = []
        }, 1300
        )


    }
    )
})

// ========================== Register onClick function to the Navigation Items 

for (let i = 0; i < navigationLinkItems.length; i++) {
    navigationLinkItems[i].addEventListener('click', function () {

        expandingContentContainer(document.querySelectorAll('.expandBtn')[i].click())

    })

}



