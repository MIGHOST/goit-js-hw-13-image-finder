import newsService from "./services/serveces"
import picturesTamplate from "../templates/pictures.hbs"


const refs = {
  searchForm: document.querySelector("#search-form"),
  articleList: document.querySelector("#article-list"),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]')
};
refs.searchForm.addEventListener("submit", searchImg);
// refs.loadMoreBtn.addEventListener("click", loadMoreBtnHandler)

function searchImg(e){
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.query.value;

  newsService.fetchArticle(searchQuery)
  .then(hits =>{
    console.log(hits)
    const markup = build(hits);
    insertListItems(markup)
  })
}

function build (items){
return picturesTamplate(items)
}


function insertListItems(items) {

  refs.articleList.insertAdjacentHTML("beforeend", items)
  
}



// function searchImg(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const input = form.elements.query;
// //   const inputValue = input.value;
//   clearList()
//   newsService.resetPage();
//   newsService.searchQuery = input.value;
//   newsService.fetchArticle().then(insertListItems);
//   input.value = "";
// };

// function loadMoreBtnHandler() {
//     newsService.fetchArticle().then(insertListItems);
// }


// function insertListItems(items) {
// const markup = picturesTamplate(items)
//   refs.articleList.insertAdjacentHTML("beforeend", markup)
//   console.log(items)
// }


// function clearList(){
//     refs.articleList.innerHTML = "";
// }