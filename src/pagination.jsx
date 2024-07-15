import { useContext } from "react";
import { context } from "./App";
function Pagination({ books }) {
  const [state, setState] = useContext(context);
  return (
    <div className="pagination text-center text-white space-x-4 mb-4">
      {books.map((book, index) => {
        return (
          index % 4 === 0 &&
          index !== 0 && (
            <span
              key={index}
              className="px-4 py-2 cursor-pointer inline-block text-lg bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => {
                setState(index);
              }}
            >
              {index / 4}
            </span>
          )
        );
      })}
    </div>
  );
}

export default Pagination;
