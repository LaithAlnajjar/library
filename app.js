

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
const cardWrapper = document.querySelector(".card-wrapper");
let deleteButtons = document.querySelectorAll(".delete-button");
const cancelButton = document.querySelector(".cancel")
let toggleButtons = document.querySelectorAll(".reset-button");
const foreground = document.querySelector(".foreground");


//Book object construction and storage

let myLibrary = [];

displayCards();

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(book) {
    myLibrary.push(book);
    displayCards();
}

//Book display

function displayCards() {

    cardWrapper.textContent = "";

    let i = 0;
    myLibrary.forEach(book => {
        let card = document.createElement("div");
        card.classList.add("card");

        let bookTitle = document.createElement("div");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = "Name: " + book.name;
        card.appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = "Author: " + book.author;
        card.appendChild(bookAuthor);

        let bookPages = document.createElement("div");
        bookPages.classList.add("book-pages");
        bookPages.textContent = "Pages: " + book.pages;
        card.appendChild(bookPages);

        let bookRead = document.createElement("div");
        bookRead.classList.add("book-read"); 1
        card.appendChild(bookRead);

        let toggleButton = document.createElement("button");
        toggleButton.classList.add("toggle-button");
        if (book.read) {
            toggleButton.textContent = "Read"
            toggleButton.classList.add("complete");
        } else {
            toggleButton.textContent = "Not Read"
            toggleButton.classList.remove("complete");

        }
        card.appendChild(toggleButton);

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        card.appendChild(deleteButton);

        cardWrapper.appendChild(card);
        deleteButton.dataset.index = i;
        toggleButton.dataset.index = i;
        i++;
    }
    )
    activateDelete();
    activateToggle();
}

//Plus button

addButton.addEventListener("click", (e) => {
    popUp.classList.add("active");
    foreground.classList.add("blur");
})

//Add book button

addBookButton.addEventListener("click", (e) => {

    if (addForm.checkValidity()) {
        let nameOfBook = bookNameInput.value;
        let authorOfBook = bookAuthorInput.value;
        let NumOfPages = bookPagesInput.value;
        let readStatus = bookReadInput.checked;

        addBookToLibrary(new Book(nameOfBook, authorOfBook, NumOfPages, readStatus));
        popUp.classList.remove("active");
        foreground.classList.remove("blur");
        e.preventDefault();
        resetForm();
    }
    else {
        addForm.setCustomValidity();
        e.preventDefault();
    }
})


//Reset

function resetForm() {
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookPagesInput.value = "";
    bookReadInput.checked = false;
}

//Activate toggle and delete
function activateDelete() {
    let deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            myLibrary.splice(button.dataset.index, 1);
            displayCards();

        })
    })
}

function activateToggle() {
    toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            let currentBook = myLibrary[button.dataset.index];
            currentBook.toggleRead();
            if (currentBook.read) {
                button.textContent = "Read";
                button.classList.add("complete");
            } else {
                button.textContent = "Not Read"
                button.classList.remove("complete");
            }
        })
    })
}

//Cancel
cancelButton.addEventListener("click", (e) => {
    popUp.classList.remove("active");
    foreground.classList.remove("blur");
    e.preventDefault();
})

Book.prototype.toggleRead = function () {
    console.log("Hi");
    this.read = this.read ? false : true;
}

let book1 = new Book("Atomic Habits", "James Clear", 320, true);
let book2 = new Book("Random Book", "Random Author", 213, false);
let book3 = new Book("The Goat", "Me", 654, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);