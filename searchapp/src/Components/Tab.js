import React, { useState } from 'react';
import Tabcontent from './Tabcontent';

const Tab = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (

    <div>
        <div className="row">
        <div className="col">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item">
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {tabs.map((tab) => (
            <div key={tab.id}  className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`} >
                 {
                  tab.content.map((result, index) => (
                    <Tabcontent key={index} title={result.title} path={result.path} parentPagePath={result.parentPagePath} summary={result.summary} 
                    parentPageName={result.parentPageName} />
                  ))
                   
                 }
            </div>
          ))}
        </div>
        </div>
      </div>    
    </div>
  );
};

export default Tab;
