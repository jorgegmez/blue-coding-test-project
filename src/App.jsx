import "./App.css";
import { useEffect, useState } from "react";
import Thumbnail from "./features/thumbnail/Thumbnail";
import { getData } from "./services/apiMock";
import SearchBox from "./features/searchBox/SearchBox";

function App() {
  const [thumbnails, setThumbnails] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(
    function () {
      getThumbnails();
    },
    [searchValue]
  );

  async function getThumbnails() {
    const arrayThumbnails = await getData(searchValue);
    setThumbnails(arrayThumbnails);
  }

  return (
    <div className="w-full flex-col text-center items-center self-center">
      <h1 className="text-xl font-bold my-4">Blue Coding - Pairing Session</h1>
      <SearchBox onSearchChange={setSearchValue} searchValue={searchValue} />
      <div
        className={
          thumbnails.length ? "w-full flex grid grid-cols-3 gap-4" : "w-full"
        }
      >
        {thumbnails.length ? (
          thumbnails.map((item) => {
            return <Thumbnail key={item.id} thumbnail={item} />;
          })
        ) : (
          <div className="w-full text-center">
            <p>no data available, type something</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
