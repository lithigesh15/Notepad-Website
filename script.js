var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,title,date,descrition
var contianer=document.querySelector(".container")
var add=document.getElementById("add")
var title=document.getElementById("title")
var date=document.getElementById("date")
var description=document.getElementById("description")

add.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${date.value}</h5>
    <p>${description.value}</p>
    <button onclick="deleteevent(event)">Delete</button>
    `
    contianer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    title.value = ""
    date.value = ""
    description.value = ""
})

function deleteevent(event){
    event.target.parentElement.remove()
}