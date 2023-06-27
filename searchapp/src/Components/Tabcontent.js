import React from "react";
import { DOT } from "../Constants/Constants";

const Tabcontent = ({ index, content, searchText }) => {
  console.log(searchText);
  return (
    <div className="row left-buffer-30 top-buffer-20 paddingDown20" key={index}>
      <span>
        <div className="row">
          <span>
            <a
              href={content.path}
              target="_blank"
              rel="noopener noreferrer"
              className="path"
            >
              {content.title}
            </a>
          </span>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <span>
              <label>{content.parentPageName}</label>
              <label>{DOT}</label>
              <label>{setText(content.document)}</label>
              <label className="left-buffer-2">
                {content.lastModifiedDate}
              </label>
            </span>
          </div>
        </div>
        <div className="row top-buffer-2">
          <span className="paragraph">
            {response(content.summary, searchText)}
          </span>
        </div>
      </span>
    </div>
  );
};

const response = (text, query) => {
  if (text || text.length > 0) {
    var newText = text;
    if (text.length > 120) {
      const words = text.split(" ");
      const croppedWords = words.slice(0, 120);
      newText = croppedWords.join(" ") + " ....";
    }

    const parts = newText.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((word) =>
          word.toLowerCase() === query.toLowerCase() ? (
            <strong>{word}</strong>
          ) : (
            word
          )
        )}
      </span>
    );
  }

  return <span>{newText}</span>;
};

const setText = (isdocument) => {
  return isdocument ? "Uploaded" : "Updated";
};

export default Tabcontent;
