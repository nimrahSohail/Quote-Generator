let quote = document.getElementById("quote");
let author = document.getElementById("author")
let api_url = "https://api.quotable.io/random";
 
async function getQuote(url){
    let response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by " + author.innerHTML, "Tweet Window", "width=600, height=300")
}