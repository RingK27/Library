let myLibrary = new Array();
let addBtn = document.getElementById("addBtn");
let btitle = document.getElementById("btitle");
let bauth = document.getElementById("bauth");
let bpages = document.getElementById("bpages");

addBtn.addEventListener("click", addBookToLibrary);

function book(title, author, pages, isRead, iNumber) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.iNumber = iNumber;
}

function addBookToLibrary() {
    let bread = document.getElementById("bread");
    if (bread.checked == true) {
        bread = "yes";
    } else {
        bread = "no";
    }
    bookToAdd = new book(btitle.value, bauth.value, bpages.value, bread, myLibrary.length);
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
        if (myLibrary[i] != undefined) {
            const card = document.createElement("div");
            const firstLine = document.createElement("p");
            const secondLine = document.createElement("p");
            const thirdLine = document.createElement("div");
            const fourthLine = document.createElement("div");
            const btnStatus = document.createElement("button");
            const btnDel = document.createElement("button");
            btnStatus.className = "book-btn";
            btnStatus.innerText = "Change status";                  
            btnDel.className = "book-btn";
            btnDel.innerText = "Delete book";              
            card.className = "card contains";
            card.id = "book-" + i;
            card.setAttribute("style", "padding: 10px")
            btnDel.dataset.inumber = myLibrary[i].iNumber;
            btnStatus.dataset.inumber = myLibrary[i].iNumber;
            firstLine.innerHTML = myLibrary[i].title + "<br> by " 
                + myLibrary[i].author +"<br><br>";
            secondLine.innerHTML = "number of pages: " 
                + myLibrary[i].pages + "<br><br><br>";
            if (myLibrary[i].isRead == "yes") {
                thirdLine.innerHTML = "Read: " 
                    + '<span><img height= 15px src="images/green.png"> YES<br><br>';
            } else {
                thirdLine.innerHTML = "Read: " 
                    + '<span><img height= 15px src="images/red.png"> NO<br><br>';    
            }
            btnDel.addEventListener("click", delBook);
            btnStatus.addEventListener("click", changeStatus);   
            fourthLine.appendChild(btnDel);
            fourthLine.appendChild(btnStatus);        
            card.appendChild(firstLine);
            card.appendChild(secondLine);
            card.appendChild(thirdLine);
            card.appendChild(fourthLine);
            container.appendChild(card);
        } 
    }  
}

function delBook() {    
    myLibrary[this.dataset.inumber] = null;
    console.log(myLibrary);
    showBooks();   
}

function changeStatus() {
    if (myLibrary[this.dataset.inumber].isRead == "yes") {
        myLibrary[this.dataset.inumber].isRead = "no";
    } else {
        myLibrary[this.dataset.inumber].isRead = "yes"; 
    }    
    showBooks();
}

let leviathan = new book("Leviathan Wakes", 
    "James S. A. Corey", 598, "yes", 0);
let gradini = new book("Gradini", 
    "Giuseppe Pietro Tornatore", 105, "yes", 1);
let anelli = new book("Il Signore degli Anelli", 
    "J. R. R. Tolkien", 1380, "yes", 2);
myLibrary.push(leviathan);
myLibrary.push(gradini);
myLibrary.push(anelli);

showBooks();