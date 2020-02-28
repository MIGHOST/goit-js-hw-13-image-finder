
const baseUrl = "https://pixabay.com/api/?image_type=photo&orientation=horizontal";


const keyAPI = '15289703-43002e1369874935da9758818';
export default  { 
page:1,
perPage: 12,
query: "",  
fetchArticle(){
    const requestParams = `&q=${this.query}&page=${this.page}&pageSize=12&key=${keyAPI}`;
    const a = baseUrl + requestParams
    return fetch(a)    
    .then(response => response.json())
    .then(parsedResponse => {
      this.incrementPage();

      return parsedResponse.hits;
    });
},
get searchQuery() {
  return this.query;
},
set searchQuery(string) {
  this.query = string;
},
incrementPage() {
  this.page += 1;
},
resetPage() {
  this.page = 1;
},
};

