
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
const gridItemOfBody =  document.body.querySelectorAll('.gridItem')


const expandButton = document.querySelectorAll('img.expandBtn')
const closeButton = document.querySelectorAll('img.closeBtn')

var rowtemplateArray = []

var targetExpandSection
var targetPositionInfo
var targetHiddenSection
var triggeredExpandbutton
var triggeredClosebutton
var initialExpandsectionHeight

// ========================== Define the Inital Grid Structure of the body Element 
function resetBodyGridView (){
    rowtemplateArray = []
    
    for ( let i =0 ; i < gridItemOfBody.length ; i++){
        rowtemplateArray.push('auto')
    }
    document.body.style.gridTemplateRows = `${rowtemplateArray.join(' ')}`
};
    resetBodyGridView();


// ========================== Register onClick function to the expan  
expandButton.forEach(button => {

    // Set the initial value for the parameters 
    button.addEventListener('mousedown', function (event) {

        // Declare the variable 
        targetExpandSection = event.target.parentNode
        targetHiddenSection = targetExpandSection.querySelector('.expand')
        triggeredExpandbutton = targetExpandSection.querySelector('.expandBtn')
        triggeredClosebutton = targetExpandSection.querySelector('.closeBtn')
        

        

        //Set the z-index of Expand section 
        targetExpandSection.style.zIndex = 11;

        // Set the Inital grid-template-row Value 
        let initalRowtemplateArray = []
        let windowHeight = document.documentElement.clientHeight
        let expandSectionHeight = targetExpandSection.getBoundingClientRect().height

        for ( let i =0 ; i < gridItemOfBody.length ; i++){
            let containerHeight = gridItemOfBody[i].offsetHeight
            initalRowtemplateArray.push(`${(containerHeight/windowHeight)*100}vh`)
        }
       

        // Set the grid-template-row Value 
        let finalRowtemplateArray = []
        
        for ( let i =0 ; i < gridItemOfBody.length ; i++){
            if(gridItemOfBody[i].id === targetExpandSection.id ) {
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
        


        // Control button Swapping
        triggeredExpandbutton.style.display = "none";
        triggeredClosebutton.style.display = 'block';
        
       // gridItemOfBody.findIndex(item => item.id === targetExpandSection.id )


        

        /*


        targetPositionInfo = targetExpandSection.getBoundingClientRect().top + window.scrollY
        initialExpandsectionHeight = targetExpandSection.style.minHeight
        

        
        targetExpandSection.style.top = `${targetPositionInfo}px`;
        targetExpandSection.style.position = "fixed";
        targetExpandSection.style.fontSize = '1rem'
        setTimeout(() => {
            
            targetExpandSection.style.transitionDuration = '1.5s';
            //targetExpandSection.style.minHeight = '100%';
            targetExpandSection.style.top = "0";
            targetExpandSection.style.bottom = "0";
            
            
           
            targetExpandSection.style.fontSize = '1.3rem'
        }, 100)
        */

        

        setTimeout(() => {
            targetHiddenSection.style.opacity = 1
        }, 800
        )
    })

})

// ========================== Register onClick function to the close 
/*
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
*/

// extracting expand information to container 
/*
const expandButton = document.querySelectorAll('input.expandBtn')
const popupContainer = document.querySelector('#popupcontainer')
*/



