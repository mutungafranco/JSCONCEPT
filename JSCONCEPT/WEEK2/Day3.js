const parentcontainer = document.querySelector(".parent-container")

parentcontainer .addEventListener(".click" ,(e)=>{
    console.log(e)
    if (e.target.tagname === "span") {
        let subcontainer = e.target.nextelementsibling
        subcontainer.classlist.toggle("hidden")
    }
})