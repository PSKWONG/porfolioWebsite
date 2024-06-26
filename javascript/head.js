// ==========================Create element for Icon Image
const iconLink = document.createElement('link');
iconLink.setAttribute('href', './media/image/sheetIcon.ico')
iconLink.setAttribute('rel', 'icon')
iconLink.setAttribute('type', 'image/x-icon')

// ==========================Create element for Basic Style Sheets
// Basic Style
const basicStyleSheet = document.createElement('link');
basicStyleSheet.setAttribute('href', './style/stylesheet.css')
basicStyleSheet.setAttribute('rel', 'stylesheet')

// Font Style
const basicFontStyleSheet = document.createElement('link');
basicFontStyleSheet.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap')
basicFontStyleSheet.setAttribute('rel', 'stylesheet')

// ==========================Create element for Basic Javascript 
//Navigation Element Javascript 
const headerScript = document.createElement('script');
headerScript.setAttribute ('src','./structure/navigation.js')
headerScript.setAttribute ('defer','true')

//Popup Container  Element Javascript 
const popupScript = document.createElement('script');
popupScript.setAttribute ('src','./structure/popup.js')
popupScript.setAttribute ('async','true')


// ==========================Append elements into head 
// Array for the element to append to head section of Page 
let headElements = [iconLink, basicStyleSheet,basicFontStyleSheet, headerScript, popupScript]


// Action to append elements into head 
headElements.forEach(Element => {
    document.head.append(Element)
})

