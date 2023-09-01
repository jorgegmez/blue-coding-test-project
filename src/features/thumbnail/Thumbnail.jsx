/* eslint-disable react/prop-types */
import React from "react";

function Thumbnail({ thumbnail }) {
  return (
    <React.Fragment>
      <div className="w-48 max-h-64 border-gray-400 border-2">
        <img className="w-full" src={thumbnail.images.original.url} />
        <h1 className="flex my-4 font-bold pl-2 justify-start">
          {thumbnail.title}
        </h1>
      </div>
    </React.Fragment>
  );
}

Thumbnail.defaultProps = {
  thumbnail: null,
};

export default Thumbnail;
