import {header} from "./Components/header.js"
import {navbar} from "./Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("searchbar").style.display="none"
document.getElementById("head").innerHTML=header()
document.getElementById("searchicon").addEventListener("click",function(){
    displaysearchbar()
})
document.getElementById("sidebar1").addEventListener("click",function(){
    displaysidebar()
})
function displaysearchbar(){
   
    var searchbar = document.getElementById("searchbar");
  if(searchbar.style.display === '') searchbar.style.display = 'block'
  else searchbar.style.display = searchbar.style.display === 'none' ? 'block' : 'none' 
}
function displaysidebar(){
    var searchbar = document.getElementById("mobilesidebar");
  if(searchbar.style.display === '') searchbar.style.display = 'block'
  else searchbar.style.display = searchbar.style.display === 'none' ? 'block' : 'none' 

}

let sidebaritems=[
    "HOME",
    "MY FEEDS",
    "INDIA",
    "WORLD",
    "BUSINESS",
    "TECH",
    "MOVIES",
    "CWG 2022 ",
    "SCIENCE",
    "BEST COLLEGES",
    "HEALTH",
    "TRENDING",
    "VIDEOS",
    "EDUCATION",
    "AUTO",
    "CITIES",
    "CRIME",
    "LIFESTYLE",
    "BINGE WATCH",
    "TELEVISION",
    "INTERACTIVES",
    "VISUAL STORIES",
    "HOROSCOPES",
    "FACTCHECK",
    "DIU",
    "NEWSMO",
    "SHOPPING",
    "GAMING",
    "CODE OF ETHICS",
    "RATE CARD",
    "DARK MODE"
]
function createsibaritems(){
    sidebaritems.forEach(element => {
       let div = document.createElement("div")
       div.innerText= element;
       div.className="mobilesidebaritems"
       document.getElementById("mobilesidebar").append(div)
    });
}
createsibaritems()