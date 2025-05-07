import Book from "./components/book/Book";


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Kitoblar CRUD</h1>
      <Book />
    </div>
  );
};

export default App;
