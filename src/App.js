import React, {Component} from 'react';
import SearchSection from './SearchSection/SearchSection';
import ResultList from './ResultList/ResultList';

class App extends Component{



  state = {
    results : [
      { 
        title: 'Big Book of Books',
        src: 'https://images.dog.ceo/breeds/mix/Masala.jpg',
        author: 'Hugh JAckson',
        price: '19.99',
        description: 'descriptiondescription',
        details: 'detailsdetailsdetails',
        detailsDisplayed: 'no'
      },
      { 
        title: 'Big Book of Books',
        src: 'https://images.dog.ceo/breeds/mix/Masala.jpg',
        author: 'Hugh JAckson',
        price: '19.99',
        description: 'descriptiondescription',
        details: 'detailsdetailsdetails',
        detailsDisplayed: 'no'
      },
      { 
        title: 'Big Book of Books',
        src: 'https://images.dog.ceo/breeds/mix/Masala.jpg',
        author: 'Hugh JAckson',
        price: '19.99',
        description: 'descriptiondescription',
        details: 'detailsdetailsdetails',
        detailsDisplayed: 'no'
      }
    ],
    term: 'coding',
    print: "all",
    free: "remove",
    searchURL_TM: 'https://www.googleapis.com/books/v1/volumes',
    apiKey: 'AIzaSyB8fDuAtzPrAe0raudJ4-7rfgZZFlkOYMU'
  }


  updateTerm = (value) => {
    //console.log('updateTerm');

    this.setState({term: value});
  }
  
  updatePrintType = (value) => {
    //console.log('updatePrintType');

    this.setState({print: value});

    //setTimeout(() => {console.log(this.state.print)},1000);

  }

  updateCost = (value) => {
    //console.log('updateCost');

    this.setState({free: value});
    //setTimeout(() => {console.log(this.state.free)},1000);

  }

  toggleDetailsDisplayed = (state) => {
    if (state == 'yes') {
      return 'no';
    }
    return 'yes';
  }

  detailsHandler = (value) => {
    //console.log('detailsHandler');
    let temp = this.state.results.filter(obj => (obj.title == value) 
      ? obj.detailsDisplayed = this.toggleDetailsDisplayed(obj.detailsDisplayed)
      : obj.detailsDisplayed = obj.detailsDisplayed);

    //console.log(temp);
    this.setState({results:temp});

    //toggle detailsDisplayed for result title passed in 
    //look at that one solution - combine map, filter and (val==val2 ? val : val2) type logic
  }
  
  paramFormat(params) {
    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
  }

  searchHandler = () => {
    console.log('searchHandler');
    let termsArr = this.state.term.split(' ');
    termsArr = termsArr.join(',');
    let params = {};

    if (this.state.free !== 'remove') {
      params = {
        q: termsArr,
        printType: this.state.print,
        filter: this.state.free,
        key: this.state.apiKey
  
      };
  
    } else {
      params = {
        q: termsArr,
        printType: this.state.print,
        key: this.state.apiKey
  
      };
    }



    let prettyParams = this.paramFormat(params);
    const url = `${this.state.searchURL_TM}?${prettyParams}`;
    console.log(url);

    fetch(url)
    .then(response => {
        if (response.ok) {
            
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    })
    .then(responseJson => this.updateResults(responseJson))
    .catch(error => {console.log(error.message)});


    //update state - format as an array of objects
  }

  updateResults = (responseJson) => {
    //let outArr = [];
    let out = responseJson.items.slice(0,10);
    let out2 = out.map(item => (
      {title:item.volumeInfo.title,
        author: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        src:item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://images.dog.ceo/breeds/mix/Masala.jpg',
        details:item.volumeInfo.publisher,
        detailsDisplayed: 'no'
      }
    ))
    this.setState({results: out2})
    console.log(this.state.results)
  }


  render() {
    console.log(this.state.results);

  return (
    <main className='App'>
      <h1>Google Book Search</h1>
      <SearchSection 
        updateTerm={this.updateTerm}
        searchHandler={this.searchHandler}
        updatePrintType={this.updatePrintType}
        updateCost={this.updateCost}
      />
      <ResultList 
        detailsHandler={this.detailsHandler}
        results={this.state.results}
      />
    </main>
  );
  }
}

export default App;