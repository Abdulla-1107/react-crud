import { useState } from "react"; 
import { useBooks } from "../../hooks/useBooks";
import Form from "../form/Form";
import Card from "../card/Card";

const Book = () => {
  const { books, createBook, updateBook, deleteBook } = useBooks();
  const [selectedBook, setSelectedBook] = useState(null); 

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        📚 Kitoblar
      </h1>

      <Form
        onSubmit={selectedBook ? updateBook : createBook}
        selectedBook={selectedBook}
        clearSelected={() => setSelectedBook(null)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {books.map((book) => (
          <Card
            key={book.id}
            book={book}
            onEdit={handleEdit}
            onDelete={deleteBook}
          />
        ))}
      </div>
    </div>
  );
};

export default Book;
