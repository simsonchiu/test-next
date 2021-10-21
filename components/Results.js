// import requests from "../utils/requests.js";

import Thumbnail from "./Thumbnail.js";

function Results({ results }) {
  return (
    <div className="px-5 my-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
