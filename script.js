const searchInput = document.getElementById("search-input")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")
const urlKey = "Idsi5QZLDKg5v7qHpLOfiPKNn1H3ziGF7DzYjmmh-ZU"


// Idsi5QZLDKg5v7qHpLOfiPKNn1H3ziGF7DzYjmmh-ZU
// https://api.unsplash.com/search/photos?page=1&query=office



var keyWord = "";
var page = 1;

async function searchImage(){
    keyWord = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${urlKey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()

    if(page === 1){
        searchResult.innerHTML = ""
    }

    const result = data.results;
    result.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;

        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    showMoreBtn.style.display = "block"

}


searchInput.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1
    searchImage()
})


showMoreBtn.addEventListener("click",()=>{
   page++;
   searchImage();
});