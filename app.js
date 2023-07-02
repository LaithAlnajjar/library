//Testing

let book1 = {
    name: "Hogwarts",
    author: "Laith Goat",
    pages: 2526,
    read: false,
}

let book2 = {
    name: "YOR",
    author: "SGoat",
    pages: 56,
    read: true,
}

let book3 = {
    name: "Hogwwewearts",
    author: "W Goat",
    pages: 6,
    read: false,
}

//DOM selection

const container = document.querySelector(".container");

//Book object construction and storage

let myLibrary = [book1, book2, book3];

function Book(name,author,pages,read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//

function showCard() {
    let card = document.createElement("div");
    card.classList.add("card");

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = "Laith";
    card.appendChild(bookTitle);


    container.appendChild(card);
}

showCard();

