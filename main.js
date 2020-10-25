window.addEventListener("load", ()=>{
    console.log("app has been loaded")
    const toggleButton = document.getElementById("toggle-article")

    toggleButton.addEventListener("click",()=>{
        const mainSection = document.querySelector(".article__main")
        const isArticleVisable = mainSection.style.display === "block" ? true : false
        toggleButton.innerHTML = `${!isArticleVisable ? "Hide" : "Show"} article`
        toggleMainSection(!isArticleVisable)
    })
});
function toggleMainSection(show){
    const mainSection = document.querySelector(".article__main");
 mainSection.style.display = show ? "block" : "none"
}
