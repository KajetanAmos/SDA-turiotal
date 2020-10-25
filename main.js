window.addEventListener("load", ()=>{
    console.log("app has been loaded")
    const toggleButton = document.getElementById("toggle-article")
    const addCommentButton = document.getElementById("add-comment-button")
    toggleButton.addEventListener("click",()=>{
        const mainSection = document.querySelector(".article__main")
        const isArticleVisable = mainSection.style.display === "block" ? true : false
        toggleButton.innerHTML = `${!isArticleVisable ? "Hide" : "Show"} article`
        toggleMainSection(!isArticleVisable)
    })
    addCommentButton.addEventListener("click", () => {
    addComment();
    })
});
function toggleMainSection(show){
    const mainSection = document.querySelector(".article__main");
 mainSection.style.display = show ? "block" : "none"
}

function addComment(){
const nameInput = document.getElementById("name-input")
const commentInput = document.getElementById("comment-input")

const comment = {
    name: nameInput.value,
    content: commentInput.value
}
if (validateComment(comment)){
    appendComment(comment)
}else
console.warn("Comment is not valid")

}


function validateComment(comment){
    const {name, content} = comment;
    return name.length && content.length ? true :false
}
function appendComment (comment){
    const node = document.createElement("div")
    const nameSection = document.createElement("p")
    const contentSection = document.createElement("p")
    const commentsList = document.querySelector(".comments__list")
    nameSection.innerHTML = comment.name
    contentSection.innerHTML = comment.content
    
    node.appendChild(nameSection)
    node.appendChild(contentSection)

    commentsList.appendChild(node)
    
}