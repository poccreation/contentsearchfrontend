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
import ApiService from '../service/ApiService';

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
         tabs : [{ id: 'confluenceTab', label: 'Confluence', content:[] },
                 { id: 'sharepointTab', label: 'Sharepoint', content:[] }]
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

    handleInputChange = (value) => {
      this.setState(() => ({
         searchText : value
      }));
      
    };

    fetchConfluenceData = async () => {
      try {
        const confApiResponse = await ApiService.search(this.state.searchText);
        this.setState({ confResult: confApiResponse.data });
        console.log('Confluence Data in state :', this.state.confResult);
        this.updateContent('confluenceTab', this.state.confResult)
        this.setState({isLoading:false});
        this.setState({showTabs:true});
      } catch (error) {
        console.error('Error fetching confluence data:', error);
      }
    };

    updateContent = (id, newContent) => {
      // Create a new array by mapping over the existing array
      const updatedData = this.state.tabs.map(item => {
        if (item.id === id) {
          // Create a new object with the updated name
          return { ...item, content: newContent };
        }
        return item;
      });
      // Update the state with the new array
      this.setState({ tabs: updatedData });

    };

   handleClick = () => {
      const confChecked =  this.state.isConfChecked
      const spChecked =  this.state.isSharepointChecked
      if (confChecked || spChecked) {
         this.setState({isLoading:true});
         this.fetchConfluenceData();
      }
    
    };


   render () {
      const { isSharepointChecked, isConfChecked, showTabs, isLoading,  tabs} = this.state;
   
      return (
         <div >
            {isLoading ? <Spinner isLoading={isLoading} />:(
            <div className='main-content'>
               <Header /><br />
               <Boogle class="form-control form-control-lg" text="Boogle!" style={{ fontSize :'80px', fontFamily: 'Brush Script MT'}} />
               <SearchBox value={this.searchText}  onInputChange={this.handleInputChange} />
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
               {showTabs && ( <Tab tabs={tabs}  defaultTab="confluenceTab" />)}
               <Footer />
         </div>
            )}
           </div>
      );
}
}

export default App

