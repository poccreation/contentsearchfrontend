import React, { useState } from 'react';

const Tab = ({ tabs, defaultTab, content }) => {
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
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
