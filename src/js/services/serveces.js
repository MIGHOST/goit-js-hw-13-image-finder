
const baseUrl = "https://newsapi.org/v2/everything";


export default{ 
page:1,
query: "",  
fetchArticle(){
    const options = {
        headers: {
            Authorization:"045783fcfda7444d92c28c4011f33205",
        },
    };
    const requestParams = `?q=${this.query}&page=${this.page}&pageSize=3`;
    return fetch(baseUrl + requestParams, options)
    .then(response => response.json())
    .then(parseResponse=> {
        this.incrementPage();
        return parseResponse.articles;
    });
  
},
get searchQuery(){
    return this.query
}, 
set searchQuery(string){
    this.query = string
},
incrementPage(){
    this.page +=1;
},
resetPage(){
    this.page = 1;
}
};