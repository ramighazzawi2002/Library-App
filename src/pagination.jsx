import { useContext } from "react";
import { context } from "./App";
function Pagination({ books }) {
  const [state, setState] = useContext(context);
  return (
    <div className="pagination text-center text-white space-x-2 mb-4">
      {books.map((book, index) => {
        return (
          index % 5 === 0 &&
          index !== 0 && (
            <span
              key={index}
              className="px-2 py-1 cursor-pointer bg-blue-500 rounded"
              onClick={() => {
                setState(index);
              }}
            >
              {index / 5}
            </span>
          )
        );
      })}
    </div>
  );
}

export default Pagination;
