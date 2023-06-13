import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Buttonc from "./Button";
import Labelc from "./Labelc";
import Boogle from "./Boogle";
import CheckBoxc from "./CheckBoxc";
import Tab from "./Tab";
import "../style.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import apiService from '../service/ApiService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isSharepointChecked: true,
      isConfChecked: true,
      showTabs: false,
      isLoading: false,
      setLoading: false,
      searchText: "",
      searchTextSubmitted: "",
      tabs: [
        { id: "confluenceTab", label: "Confluence", content: [], message:'' },
        { id: "sharepointTab", label: "Sharepoint", content: [], message:'' },
      ],
    };
  }

  handleSharePointCheckboxChange = () => {
    this.setState((prevState) => ({
      isSharepointChecked: !prevState.isSharepointChecked,
    }));
  };

  handleConfluenceCheckboxChange = () => {
    this.setState((prevState) => ({
      isConfChecked: !prevState.isConfChecked,
    }));
  };

  handleInputChange = (value) => {
    this.setState(() => ({
      searchText: value,
    }));
  };

  fetchConfluenceData = async (confChecked, spChecked) => {
    let tabs = [];
    try {
      this.setState({ isLoading: true });
      let tab = { id: "confluenceTab", label: "Confluence", content: [], message:'' }
      let sptab = { id: "sharepointTab", label: "Sharepoint", content: [], message:'' }
      if (confChecked) {
        var confApiResponse = await  apiService.search(this.state.searchText);
        if (!confApiResponse.data || confApiResponse.data.length === 0) {
          tab.message = 'No Result Found!'
          tabs.push(tab);
        } else {
          tab.content = confApiResponse.data.queryResponses;    
          tabs.push(tab); 
        }
      }
      if (spChecked) {
        var spApiResponse = await apiService.sharePointSearch(this.state.searchText);
        if (!spApiResponse.data || spApiResponse.data.length === 0) {
          sptab.message = 'No Result Found!'
          tabs.push(sptab);
        } else {
          sptab.content = spApiResponse.data.queryResponses;   
          tabs.push(sptab);
        }
      } 
      this.setState({
        isLoading: false,
        showTabs: true,
        searchTextSubmitted: this.state.searchText,
        tabs: tabs,
        searchText:""
      });
    } catch (error) {
      this.setState({ isLoading: false });
      toast.error("Something went wrong, please try again later.");
    }
  };

 
  handleClick = () => {
    this.setState({
      showTabs: false,
      tabs: [
        { id: "confluenceTab", label: "Confluence", content: [], message:'' },
        { id: "sharepointTab", label: "Sharepoint", content: [], message:'' },
      ],
    });
    if (this.state.searchText == null || this.state.searchText.trim() === '') {
      this.setState({isLoading:false});
      return;
     } 
    const confChecked = this.state.isConfChecked;
    const spChecked = this.state.isSharepointChecked;
    if (confChecked || spChecked) {
      this.fetchConfluenceData(confChecked, spChecked);
    }
  };

  render() {
    const { isSharepointChecked, isConfChecked, showTabs, isLoading, tabs } = this.state;
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          <div className="main-content">
            <Header />
            <br />
            <Boogle
              class="form-control form-control-lg"
              style={{ fontSize: "130px", fontFamily: "Brush Script MT" }}
            />
            <SearchBox
              value={this.searchText}
              onInputChange={this.handleInputChange}
            />
            <div className="row mt-2">
              <div className="col-md-4" />
              <div className="col-md-5">
                <CheckBoxc
                  style={{ width: "25px" }}
                  checked={isConfChecked}
                  onChange={this.handleConfluenceCheckboxChange}
                />
                <Labelc text="Confluence" style={{ fontSize: "1rem" }} />
                <CheckBoxc
                  style={{ width: "25px" }}
                  checked={isSharepointChecked}
                  onChange={this.handleSharePointCheckboxChange}
                />
                <Labelc text="Sharepoint" style={{ fontSize: "1rem" }} />
                <Buttonc caption="Search" onClick={this.handleClick} />
              </div>
              <div className="col-md-3" />
            </div>
            <br />
            {showTabs && (<Tab tabs={tabs} defaultTab="confluenceTab" searchText={this.state.searchTextSubmitted} />
            )}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
