import React from 'react';
import $ from 'jquery'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places = [] 
    }
  }
  
  componentDidMount() { 
    $.get('/api/nearbyPlaces/:id', (places) => {
        this.setState({
          places: places 
        });
      });
  }
  
  

  render() {
    return (
      <MovieList/>
    );
  }
}