import newsService from "./services/getAPI";
import picturesTemplate from "../templates/pictures.hbs";

class Form {
  constructor() {
    this.body = document.querySelector("body");

    this.searchForm = null;
    this.articleList = null;
    this.searchInput = null;
    this.itemsImg = null;
    this.loadMoreBtn = null
  }


  makeSearchForm() {
    return `
    <form class="search-form" id="search-form">
    <input
      type="text"
      name="query"
      autocomplete="off"
      class = "js-search-input search-input"
      placeholder="Search images..."
    />
  </form>`
  }
  makeImgList() {
    return `<ul class="gallery js-gallery__item">
</ul>
  `
  }
  makeBtn() {
    return `<button type="button" class = "js-btn" data-action="load-more">Load more</button>`
  }

  start(container) {
    this.addToScreen(container, "beforeend", this.makeSearchForm());
    this.addToScreen(container, "beforeend", this.makeImgList());
    this.searchForm = document.querySelector("#search-form");
    this.searchInput = document.querySelector(".js-search-input");
    this.articleList = document.querySelector(".js-gallery__item");    
    this.searchForm.addEventListener("submit", this.searchImg.bind(this));
 


  }
  addToScreen(container, position, el) {
    container.insertAdjacentHTML(position, el)
  }

  searchImg(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.query;
    this.clearListItems();
    newsService.resetPage();
    newsService.searchQuery = input.value;
  
    this.fetchArticles();
    this.renderBtn()
    this.btn = document.querySelector(".js-btn")
    this.btn.addEventListener("click", this.loadMoreBtnHandler())
    input.value = '';


  }
  fetchArticles() {

    newsService.fetchArticle()
      .then(data => {
        this.build(data);
      })
      .catch(error => {
        console.warn(error);
      });
  }

  build(items) {
    const markup = items.reduce((acc, el) => picturesTemplate(el) + acc, "");

    this.articleList.insertAdjacentHTML("afterbegin", markup)
  }
  renderBtn() {
    const list = document.querySelector(".gallery");
    this.addToScreen(list, "beforeend", this.makeBtn())
  }

  clearListItems() {
    this.articleList.innerHTML = '';
  }

  loadMoreBtnHandler() {
    this.fetchArticles();
  }

}

export default Form;
