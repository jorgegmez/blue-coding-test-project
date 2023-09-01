/* eslint-disable react/prop-types */

function SearchBox({ onSearchChange, searchValue }) {
  return (
    <div className="my-8">
      <input
        className=" p-2 border-2 border-gray-400 mr-2"
        onChange={(e) => onSearchChange(e?.target?.value)}
        type="text"
        value={searchValue}
        placeholder="search a gif"
      />
    </div>
  );
}

export default SearchBox;
