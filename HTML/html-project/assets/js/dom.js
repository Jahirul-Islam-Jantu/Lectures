// getElementById - select element by id
// getElementsByTagName - select element by tag name
// getElementByClassName - select single element by class name
// getElementsByClassName - select all classes
// querySelector - select all type of elements by this selector
// querySelectorAll - select many classes or elements by this selector

// let heading = document.querySelector("#heading")

// heading.innerText = "Hello from JavaScript"

// heading.addEventListener("click", e => {
    
//     heading.innerText = "Hello from JavaScript"
// })




// let header =  document.querySelector(".header")

// header.addEventListener("dblclick", function (){
//     header.style.color = "aqua"
//     header.innerText = "2 times Clicked "
// } )

function handleChange(){
    let header =  document.querySelector(".header") 
    
    header.style.backgroundColor = "red"
    header.style.color = "white"
    header.innerText = "Clicked from JS"

}


