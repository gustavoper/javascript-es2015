class Book {
    constructor (title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn  = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Book("The Lord of The Rings", 1214, '9780395489321')
console.log(book.title);
book.title = "V for Vendetta";
console.log(book.title);
