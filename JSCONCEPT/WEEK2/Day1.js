/**
 * @DOm manipulation
 * @accessing
 * query selectors
 * document.queryselector
 * 
 * id selector
 * document.getElemtById
 * 
 * class selector
 * document.getElementByClassName
 */

/**
 * @eventlisterns
 */

let mybutton =document.querySelector(".button")
let paragraph =document.querySelector(".par")

let initialtext =paragraph.innertext
mybutton.addEventListener("click", ()=>{
    if (paragraph.inertext === initialtext) {
        paragraph.innertext = "hello world"
    } else {
        paragraph.innertext = initialtext
    }
})