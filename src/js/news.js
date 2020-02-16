import newsService from "./services/serveces"
import articleListItemTamplate from "../templates/article-list-item.hbs"


const refs = {
  searchForm: document.querySelector("#search-form"),
  articleList: document.querySelector("#article-list"),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]')
};
refs.searchForm.addEventListener("submit", searchFormSubmit);
refs.loadMoreBtn.addEventListener("click", loadMoreBtnHandler)

function searchFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.query;
//   const inputValue = input.value;
  clearList()
  newsService.resetPage();
  newsService.searchQuery = input.value;
  newsService.fetchArticle().then(insertListItems);
  input.value = "";
};

function loadMoreBtnHandler() {
    newsService.fetchArticle().then(insertListItems);
}


function insertListItems(items) {
const markup = articleListItemTamplate(items)
  refs.articleList.insertAdjacentHTML("beforeend", markup)
}


function clearList(){
    refs.articleList.innerHTML = "";
}