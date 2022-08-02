let url = "http://localhost:3000/articles"


let getData = async () => {

    let res = await fetch(url)
    let data = await res.json()
    // console.log(data)
    return data
}

let appendData = async () => {
    let receivedData = await getData()

    receivedData.forEach((element, index) => {
        if (index < 4) {
            let containerDiv = document.getElementById("newsToday-flexbox-1")
            let parentDiv = document.createElement("div")
            let iframeDiv = document.createElement("div")
            let TextDiv = document.createElement("div")
            let text = document.createElement("p")

            iframeDiv.innerHTML = element.videoUrl
            text.textContent = element.description

            TextDiv.append(text)
            parentDiv.append(iframeDiv, TextDiv)
            containerDiv.append(parentDiv)
        }

        if (index >=4  && index < 8) {
            let containerDiv = document.getElementById("newsToday-flexbox-2")
            let parentDiv = document.createElement("div")
            let iframeDiv = document.createElement("div")
            let TextDiv = document.createElement("div")
            let text = document.createElement("p")

            iframeDiv.innerHTML = element.videoUrl
            text.textContent = element.description

            TextDiv.append(text)
            parentDiv.append(iframeDiv, TextDiv)
            containerDiv.append(parentDiv)
        }
    });



}

 appendData()
// getData()