import { useEffect, useState } from "react";

const initialState = {
  title: "",
  desc: "",
  price: "",
  author: "",
  stock: "",
  genre: "",
};

const Form = ({ onSubmit, selectedBook, clearSelected }) => {
  const [bookData, setBookData] = useState(initialState);

  useEffect(() => {
    if (selectedBook) {
      setBookData(selectedBook);
    } else {
      setBookData(initialState);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !bookData.title ||
      !bookData.desc ||
      !bookData.price ||
      !bookData.author ||
      !bookData.stock ||
      !bookData.genre
    )
      return alert("Barcha maydonlarni toldiring!");

    if (selectedBook) {
      onSubmit(selectedBook.id, bookData);
    } else {
      onSubmit(bookData);
    }

    setBookData(initialState);
    clearSelected();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input
        name="title"
        value={bookData.title}
        onChange={handleChange}
        placeholder="Kitob nomi"
        className="border p-2 rounded"
      />
      <input
        name="author"
        value={bookData.author}
        onChange={handleChange}
        placeholder="Muallif"
        className="border p-2 rounded"
      />
      <input
        name="price"
        value={bookData.price}
        onChange={handleChange}
        type="number"
        placeholder="Narxi"
        className="border p-2 rounded"
      />
      <input
        name="stock"
        value={bookData.stock}
        onChange={handleChange}
        type="number"
        placeholder="Omborda nechta"
        className="border p-2 rounded"
      />
      <input
        name="genre"
        value={bookData.genre}
        onChange={handleChange}
        placeholder="Janr"
        className="border p-2 rounded"
      />
      <textarea
        name="desc"
        value={bookData.desc}
        onChange={handleChange}
        placeholder="Kitob haqida"
        className="border p-2 rounded col-span-1 md:col-span-2"
      />

      <div className="flex gap-4 mt-2 col-span-1 md:col-span-2 justify-end">
        {selectedBook && (
          <button
            type="button"
            onClick={() => {
              setBookData(initialState);
              clearSelected();
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Bekor qilish
          </button>
        )}
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
          {selectedBook ? "Yangilash" : "Qo'shish"}
        </button>
      </div>
    </form>
  );
};

export default Form;
