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

class ITBook extends Book {
    constructor(title, pages, isbn, format) {
        super(title, pages, isbn);
        this._format = format;
    } 

    get format() {
        return this._format;
    }

    set format(frmt) {
        this._format = frmt;
    }

    printFormat() {
        console.log(this._format);
    }
}


let newbook = new ITBook("The Hitchhiker's Guide to the Galaxy", 995,"9780345391803","paper");

console.log( `${newbook.title} - ${newbook.format}`);


newbook.format = "digital - pdf";

console.log( `${newbook.title} - ${newbook.format}`);