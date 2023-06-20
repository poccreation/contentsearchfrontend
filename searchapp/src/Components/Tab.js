import React, { useState } from "react";
import Tabcontent from "./Tabcontent";

const Tab = ({ tabs, defaultTab, searchText }) => {
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
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content">   
            {tabs.map((tab) => (
              <div  key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}>
                {tab.content.length === 0 ? <div className="noResultMessage"> <span><b>{tab.message} </b></span> </div> :   
                <div>   {tab.content.map((result, index) => (
                      <Tabcontent
                        key={index}
                        content={result}
                        searchText={searchText}
                      />
                    ))}
                </div> 
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
