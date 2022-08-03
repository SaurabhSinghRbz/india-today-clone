function createsibaritems(){
    sidebaritems.forEach(element => {
       let div = document.createElement("div")
       div.innerText= element;
       div.className="mobilesidebaritems"
       document.getElementById("mobilesidebar").append(div)
    });
}
createsibaritems()
