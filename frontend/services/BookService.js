class BookService {
  constructor() {
    this.URI = 'http://localhost:3000/api/books';
  }

  async getBook() {
    const response = await fetch(this.URI);
    const books = await response.json();
    return books;
  }

  async postBook(book) {
    const response = await fetch(this.URI, {
      method: 'POST',
      body: book
    });
    const newBook = await response.json();
    console.log(newBook);
  }

  async deleteBook(bookId) {
    const response = await fetch(`${this.URI}/${bookId}`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'DELETE'
    });

    const bookDeleted = await response.json();
    console.log(bookDeleted);

  }
}

export default BookService;