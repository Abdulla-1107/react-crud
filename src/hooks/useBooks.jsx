import { useEffect, useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("books");
    if (data) {
      setBooks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const createBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => (book.id === id ? { ...book, ...updatedBook } : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return {
    books,
    createBook,
    updateBook,
    deleteBook,
  };
};
