class BookService {
  constructor() {
    this.URI = 'http://localhost:3000/api/books';
  }

  async getBook() {
    const response = await fetch(this.URI);
    const books = response.json();
    return books;
  }

  postBook() {

  }

  deleteBook() {

  }
}