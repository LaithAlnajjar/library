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
const addButton = document.querySelector(".add-book");
const popUp = document.querySelector(".pop-up");
const addBookButton = document.querySelector(".final-add-book")
const bookNameInput = document.querySelector("#name");
const bookAuthorInput = document.querySelector("#author");
const bookPagesInput = document.querySelector("#pages");
const bookReadInput = document.querySelector("#read");
const addForm = document.querySelector("form");

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
  displayCard(book);
}

//Book display

function displayCard(book) {
    let card = document.createElement("div");
    card.classList.add("card");

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = book.name;
    card.appendChild(bookTitle);

    let bookAuthor = document.createElement("div");
    bookTitle.classList.add("book-author");
    bookTitle.textContent = book.author;
    card.appendChild(bookAuthor);

    let bookPages = document.createElement("div");
    bookTitle.classList.add("book-pages");
    bookTitle.textContent = book.pages;
    card.appendChild(bookPages);

    let bookRead = document.createElement("div");
    bookTitle.classList.add("book-read");
    bookTitle.textContent = book.read;
    card.appendChild(bookRead);


    container.appendChild(card);
}

//Plus button

addButton.addEventListener("click", (e) => {
    popUp.classList.add("active");
})

addBookButton.addEventListener("click", (e) => {

    if(addForm.checkValidity()){
        let nameOfBook = bookNameInput.value;
    let authorOfBook = bookAuthorInput.value;
    let NumOfPages = bookPagesInput.value;
    let readStatus = bookReadInput.checked;

    addBookToLibrary(new Book(nameOfBook, authorOfBook, NumOfPages, readStatus));
    popUp.classList.remove("active");
    e.preventDefault();
    }
    else {
        addForm.setCustomValidity();
        e.preventDefault();
    }
})

