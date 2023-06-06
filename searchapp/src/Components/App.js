import React, { Component } from 'react';
import SearchBox from './SearchBox';
import  Buttonc  from './Button';
import  Labelc  from './Labelc';
import  Boogle  from './Boogle';
import  CheckBoxc  from './CheckBoxc';
import  Tab  from './Tab';
import '../style.css';
import Footer from './Footer';
import Header from './Header';
import Spinner from './Spinner';


class App extends Component {


   constructor() {
      super()
      this.handleClick = this.handleClick.bind(this);
      this.state = {
         isSharepointChecked: true,
         isConfChecked : true,
         showTabs:false,
         isLoading: false,
         setLoading: false,
         tabContent: {
            confTabContent: 'Content for Confluence Tab',
            spTabContent: 'Content for Sharepoint Tab',
          }
       };
   
   }

   handleSharePointCheckboxChange = () => {
      this.setState((prevState) => ({
         isSharepointChecked: !prevState.isSharepointChecked
      }));
    };

    handleConfluenceCheckboxChange = () => {
      this.setState((prevState) => ({
         isConfChecked: !prevState.isConfChecked
      }));
    };

   handleClick = () => {
      this.setState({ isLoading: true });
      const confChecked =  this.state.isConfChecked
      const spChecked =  this.state.isSharepointChecked
      if (confChecked || spChecked) {
         setTimeout(() => {
            this.setState({ isLoading: true });
            this.setState({ showTabs: true });
          }, 3000);
      
      }
     

    };


   render () {
      const { isSharepointChecked, isConfChecked, showTabs, isLoading, tabContent } = this.state;
      const tabs = [
         { id: 'confluenceTab', label: 'Confluence', content: '' },
         { id: 'sharepointTab', label: 'Sharepoint', content: '' },
       ];
   
      return (
         <div>
               <Header /><br />
               <Boogle class="form-control form-control-lg" text="Boogle!" style={{ fontSize :'80px', fontFamily: 'Brush Script MT'}} />
               <SearchBox />
               <div className="row mt-2">
                  <div className="col-md-4"/>
                  <div className="col-md-5"> 
                        <CheckBoxc style={{width: '25px' }}  checked={isConfChecked}  onChange={this.handleConfluenceCheckboxChange} />  
                        <Labelc text="Confluence" style={{ fontSize :'1rem',  }} />
                        <CheckBoxc  style={{width: '25px' }}  checked={isSharepointChecked}  onChange={this.handleSharePointCheckboxChange} /> 
                        <Labelc text="Sharepoint" style={{ fontSize :'1rem',  }} />
                        <Buttonc caption="Search" onClick={this.handleClick} />
                  </div>
                  <div className="col-md-3"/>
               </div><br />
               {isLoading  &&  <Spinner isLoading={isLoading} /> }
               {showTabs && ( <Tab tabs={tabs} content={tabContent} defaultTab="confluenceTab" />)}
               <Footer />
         </div>
          
      );
}
}

export default App

