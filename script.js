// Variables
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const button = document.querySelector(".button")

search.addEventListener("click", push)
function push() {
    search.classList.add("active")
}

search.addEventListener("dblclick", remove)
function remove() {
    search.classList.remove("active")
}


// with toggle 
// search.addEventListener("click", active)
// function active() {
//     search.classList.toggle("active")

// }