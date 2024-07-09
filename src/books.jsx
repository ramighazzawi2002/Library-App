function Books({ title, author, publishedYear, genre, language, pages }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96 hover:scale-105 transition-all duration-500">
      <h1 className="bg-red-500 text-white text-3xl font-bold p-4 rounded">
        {title}
      </h1>
      <div className="mt-4 text-lg ">
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p>
          <span className="font-semibold">Published Year:</span> {publishedYear}
        </p>
        <p>
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p>
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p>
          <span className="font-semibold">Pages:</span> {pages}
        </p>
      </div>
    </div>
  );
}

export default Books;
