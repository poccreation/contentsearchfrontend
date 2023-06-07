import React from 'react';

const Tabcontent = ({ index, title, path, parentPagePath, summary, parentPageName }) => {

    return (
      <div>
        <div className="row">
            <div className="col-md-4 mt-1">
                <div key={index}>
                    <p>  {title} <br />
                    <a href={path} target="_blank" rel="noopener noreferrer">{title}</a><br />
                    <span>{summary}</span>
                    <a href={parentPagePath} target="_blank" rel="noopener noreferrer">{parentPageName}</a><br />
                    </p>
                </div>
          </div>
          <div className="col-md-4"/>
          <div className="col-md-4"/>
        </div>
      </div>
    );
  };

export default Tabcontent;
