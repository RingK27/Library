let myLibrary = new Array();
let addBtn = document.getElementById("addBtn");
let btitle = document.getElementById("btitle");
let bauth = document.getElementById("bauth");
let bpages = document.getElementById("bpages");
let bread = document.getElementById("bread");
addBtn.addEventListener("click", addBookToLibrary);

function book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    bookToAdd = new book(btitle.value, bauth.value, bpages.value, bread.value);
    myLibrary.push(bookToAdd);
    btitle.value = "";
    bauth.value = ""; 
    bpages.value = ""; 
    bread.value = "";
    showBooks();
}

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title + " " + myLibrary[i].author + " " + myLibrary[i].pages + " " + myLibrary[i].isRead);
    }  
}