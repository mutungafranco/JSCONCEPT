/**
 * @eventlisteners
 */

button1.style.backgroundcolor ="green"
button2.style.backgroundcolor ="yellow"

button1.addEventlistener("click" , (e)=>{
    e.stoppropagation()
    document.body.style.backgroundcolor =button1.style.backgroundcolor
    console.log("button1 clicked")
})
    button2.addEventlistener("click" (e)=>{
        e.stoppropagation()
        document.body.stlye.backgroundcolor =button2.stlye.backgroundcolor
        console.log("button2 clicked")
    })
button2.addEventlistener("click," (e)=>{
    e.stoppropagation
    document.body.style.backgroundcolor =button2.stlye.backgroundcolor
    console.log("button2 clicked")
})
