function createsibaritems(){
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
    
    
    sidebaritems.forEach(element => {
       let div = document.createElement("div")
       div.innerText= element;
       div.className="mobilesidebaritems"
       document.getElementById("mobilesidebar").append(div)
    });
}
 export {createsibaritems}