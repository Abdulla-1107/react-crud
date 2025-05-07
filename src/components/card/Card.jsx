const Card = ({ book, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`"${book.title}" kitobini o'chirishni xohlaysizmi?`)) {
      onDelete(book.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-indigo-700 mb-2">{book.title}</h2>
        <p className="text-sm text-gray-600 mb-1"><strong>Muallif:</strong> {book.author}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Janr:</strong> {book.genre}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Narxi:</strong> ${book.price}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Omborda:</strong> {book.stock} ta</p>
        <p className="text-sm text-gray-700 mt-2">{book.desc}</p>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => onEdit(book)}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
        >
          Tahrirlash
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          O'chirish
        </button>
      </div>
    </div>
  );
};

export default Card;
