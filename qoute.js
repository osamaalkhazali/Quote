let btn = document.querySelector("button")
let box = document.querySelector(".quote")

let getQuote = function () {
    let req = new XMLHttpRequest()
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let quote = JSON.parse(this.responseText);
            
            let random = Math.floor(Math.random()*quote.length)
                box.innerHTML = ""
                let q = document.createElement("q")
                q.textContent = quote[random].quote
            box.appendChild(q)
            
            let p = document.createElement("p")
            p.textContent = `- ${quote[random].author}`
            box.appendChild(p)

            btn.onclick = function () {
                random = Math.floor(Math.random()*quote.length)
                box.innerHTML = ""
                let q = document.createElement("q")
                q.textContent = quote[random].quote
                box.appendChild(q)
                p = document.createElement("p")
            p.textContent = `- ${quote[random].author}`
            box.appendChild(p)

            }
            

        }

    }
    req.open("GET", "qoute.json", true);
    req.send();    
}

getQuote()