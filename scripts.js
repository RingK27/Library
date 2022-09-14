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
    let container = document.getElementById("book-cards-container");
    container.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        
        const card = document.createElement("div");
        const firstLine = document.createElement("p");
        const secondLine = document.createElement("p");
        const thirdLine = document.createElement("div");
        card.className = "card contains";
        card.setAttribute("style", "padding: 10px")
        firstLine.innerHTML = myLibrary[i].title + "<br> by " + myLibrary[i].author +"<br><br><br><br>";
        secondLine.innerHTML = "number of pages: " + myLibrary[i].pages + "<br><br><br>";
        thirdLine.innerText = "Read: " + myLibrary[i].isRead;
        card.appendChild(firstLine);
        card.appendChild(secondLine);
        card.appendChild(thirdLine);
        container.appendChild(card);
    }  
}

let leviathan = new book("Leviathan Wakes", "James S. A. Corey", 598, "yes");
let gradini = new book("Gradini", "Giuseppe Pietro Tornatore", 105, "yes");
let anelli = new book("Il Signore degli Anelli", "J. R. R. Tolkien", 1380, "yes");
myLibrary.push(leviathan);
myLibrary.push(gradini);
myLibrary.push(anelli);

showBooks();