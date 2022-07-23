//EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
//document.all[10].textContent = "Hello";

console.log(document.forms);
console.log(document.links)
console.log(document.images);
*/

//GET ELEMENT BY ID//
//console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");

console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>";
headerTitle.style.borderBottom = "solid 3px #000";

//GETELEMENTBYCLASSNAME //
var item = document.getElementsByClassName("list-group-item");
console.log(item);
console.log(item[1]);
item[1].textContent = "Hello 2";
item[1].style.fontWeight = "bold";
item[1].style.backgroundColor = "yellow";

var header = document.getElementsByClassName("title");

main.style.color = "green";
main.style.fontWeight = "bold";
