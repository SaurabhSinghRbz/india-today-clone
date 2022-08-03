// footer --->
import { footer, expandFooter } from "../Components/footer.js";
document.getElementById("footerContainer").innerHTML = footer();
// expandFooter();
// console.log(expandFooter())
let hiderFalg = true;
let hiderDiv = document.getElementById("hider").addEventListener('click', function () {
    if (hiderFalg) {
        document.getElementById("footerBlock2").style.display = "none"
        document.getElementById("hiderImg").src = "../Images/footer/expand.png"
        hiderFalg = false;
    } else {
        document.getElementById("footerBlock2").style.display = "grid"
        document.getElementById("hiderImg").src = "../Images/footer/hide.png"
        hiderFalg = true
    }
})
//  footer ends----------------------------------------------------------------------




// Article result show --->
const getData = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}



const initFunction = async () => {
    try {
        let newsData = await getData("http://localhost:3000/articles")
        console.log(newsData)
        displayNews(newsData)
    } catch (error) {
        console.log(error)
    }
}
initFunction();
function displayNews(newsData) {
    let randomNews = Math.floor(Math.random() * 668)
    let { country, category, title, description, author: authorName, publishedAt, urlToImage, content } = newsData[randomNews]
    if (authorName == null || authorName == "") {
        authorName = "XYZ-XYZ"
    }
    let dateAndTime = publishedAt.split("T")

    let newsContentArr = content.split("[")
    console.log(newsContentArr)
    document.getElementById("pageTitle").textContent = title;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("auName").textContent = authorName;
    document.getElementById("postedDate").textContent = `Date: ${dateAndTime[0]}, Time: ${dateAndTime[1]}`;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("showCategoery").textContent = `News / ${country} / ${category} / ${title}`;
    document.querySelector("em").innerHTML = description;
    document.getElementById("articlePoster").src = urlToImage;
    document.getElementById("newsContent1").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent2").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent3").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent4").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
}


