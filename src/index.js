import './styles.css';
import imgItems from "../src/templates/pictures.hbs";
import "./js/imgServices";

import Form from "./js/imgServices.js";
const bodyDOM = document.querySelector("body");

const searchForm = new Form();
console.log(searchForm);
searchForm.start(bodyDOM);  