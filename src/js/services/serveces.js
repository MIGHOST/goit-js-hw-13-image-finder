
const baseUrl = "https://pixabay.com/api/?key=15289703-43002e1369874935da9758818";


export default{ 
page:1,
query: "",  
fetchArticle(){
    const options = {
        headers: {
            Authorization:"045783fcfda7444d92c28c4011f33205",
        },
    };
    const requestParams = `&q=${this.query}&page=${this.page}&pageSize=3`;
    return fetch(baseUrl + requestParams,)
    .then(response => response.json())
    .then(parse => parse.hits)
   
  
},};
