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

async function fetchfeatureddata(){
    let rnum= Math.floor((Math.random()*100)+1)
    console.log(rnum)
    try {
        let featuredres= await fetch(`http://localhost:3000/articles?_start=${rnum}&_limit=3`)
        let featureddata = await featuredres.json()
        let topres =await fetch(`http://localhost:3000/articles?_start=${rnum}&_limit=40&country=India`)
        let topdata = await topres.json()
        console.log(featureddata,topdata)
         displayfeatueddata(featureddata,topdata)
    } catch (error) {
        console.log(error)
    }
}
function displayfeatueddata(featuredata,topdata){
    let featurenews = document.createElement("div")
        featurenews.className="featurednews"
    featuredata.forEach(element => {
        
    let featuredpost1= document.createElement("div")
    featuredpost1.className="post"
    let postimg = document.createElement("img");
    postimg.className="postimg"
    postimg.src= element.urlToImage
    let posttitle= document.createElement("h3")
    posttitle.innerText= element.title;
    featuredpost1.append(postimg,posttitle);
    featurenews.append(featuredpost1);
    document.getElementById("featurednewsdiv").append(featurenews)
    });
   
    topdata.forEach(element => {
        let topstories = document.createElement("div")
        topstories.className="topstories"
        let h4 = document.createElement("h4")
        h4.innerText=element.title;
        topstories.append(h4);
        document.getElementById("topstoriesdiv").append(topstories)
    });

}
fetchfeatureddata()

let categories1 = [
    "India",
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
"FACTCHECK"]


categories1.forEach(element => {
   
        fetchcategoriedata(element)
});
async function fetchcategoriedata(element){
    try {
        let res = await fetch(`http://localhost:3000/articles?q=${element}&_limit=5`)
let data = await res.json()
console.log(data)
displaycategoriesdata(element,data)
    } catch (error) {
        console.log(error)
    }
    
    }
function displaycategoriesdata(element1,data){
if(data.length<5){
    console.log(data.length)
}
else{
    let divmain = document.getElementById("newscategories")
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
 h2.innerText= element1
 div.append(h2)
 let ul = document.createElement("ul")
 data.forEach(elem => {
    
    

        if(elem===data[0]){
           
            let image = document.createElement("img")
            image.src= elem.urlToImage
            let headline = document.createElement("h1")
            headline.innerText=elem.title
            div.append(image,headline)
            
        }
        
            
            let listitem = document.createElement("li")
            let h4 = document.createElement("h4")
            h4.innerText= elem.title
            listitem.append(h4)
            ul.append(listitem)
            
        
        
        
    });
    div.append(ul)
    divmain.append(div)
}

}