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
         searchText:'',
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

    handleSearchBoxChange =() => 
    {
      this.setState(() => ({
         searchText: this.searchText
      }));
    }

   handleClick = () => {
      const confChecked =  this.state.isConfChecked
      const spChecked =  this.state.isSharepointChecked

      if (confChecked || spChecked) {
         this.setState({isLoading:true})
      }
      
      setTimeout(() => {
            this.setState({ showTabs: true });
            this.setState({ isLoading: false });
          }, 9000);

    };


   render () {
      const { isSharepointChecked, isConfChecked, showTabs, isLoading, tabContent } = this.state;
      const tabs = [
         { id: 'confluenceTab', label: 'Confluence', content: '' },
         { id: 'sharepointTab', label: 'Sharepoint', content: '' },
       ];
   
      return (
         <div className="container">
            {isLoading ? <Spinner isLoading={isLoading} />:(
            <div className='main-content'>
               <Header /><br />
               <Boogle class="form-control form-control-lg" text="Boogle!" style={{ fontSize :'80px', fontFamily: 'Brush Script MT'}} />
               <SearchBox value={this.searchText} onChange={this.handleSearchBoxChange}/>
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
               {showTabs && ( <Tab tabs={tabs} content={tabContent} defaultTab="confluenceTab" />)}
               <Footer />
         </div>
            )}
           </div>
      );
}
}

export default App

