import React from "react";
import { DOT } from "../Constants/Constants";

const Tabcontent = ({ index, content, searchText }) => {
  console.log(searchText);
  return (
    <div className="row left-buffer-30 top-buffer-20" key={index}>
      <span>
        <div className="row">
          <span>
            <a
              href={content.path}
              target="_blank"
              rel="noopener noreferrer"
              className="path"
            >
              {response(content.title, searchText)}
            </a>
          </span>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <span>
              {" "}
              <a
                href={content.parentPagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="basePath"
              >
                {content.parentPageName}
              </a>
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
    const words = text.split(" ");
    const formattedResponse = words.map((word, index) => {
      const isMatch = word.toLowerCase().includes(query.toLowerCase());
      return isMatch ? <strong key={index}>{word} </strong> : `${word} `;
    });
    return <span>{formattedResponse}</span>;
  }

  return <span>{text}</span>;
};

const setText = (isdocument) => {
  return isdocument ? "Uploaded" : "Updated";
};

export default Tabcontent;
