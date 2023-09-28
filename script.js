function func(url){
    window.location.href = "https://"+url;
}

function updateEngine(string){
    engine = string
    update(string)
}
function update(string){
    if (string === "bing"){
        google.classList.add("hidden")
        google2.classList.remove("active")
        bing.classList.remove("hidden")
        bing2.classList.add("active")
    }

    if (string === "google"){
        bing.classList.add("hidden")
        bing2.classList.remove("active")
        google.classList.remove("hidden")
        google2.classList.add("active")
    }
}

function searchEngine(){
    string = search.value
    search.value = ""
    if (string != ""){
    string = string.replace(/ /g,"+")
    if (engine === "bing"){
        let s = "https://www.bing.com/search?q="+string
        window.location.href = s
    }

    if (engine === "google"){
        let s = "https://www.google.com/search?q="+string
        window.location.href = s
    }
}
}

let engine = "bing"