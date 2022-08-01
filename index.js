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