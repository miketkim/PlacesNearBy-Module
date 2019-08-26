import React, { Component } from 'react';
import axios from 'axios'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [], 
      activities: []
    }

    this.fetchPlaces = this.fetchPlaces.bind(this); 
  }
  componentDidMount() {
    this.fetchPlaces()
  }

  fetchPlaces() {
    axios.get('/api/nearbyPlaces', {
    })
    .then(res => {
      const places = res.data;
      this.setState({ places });
    })
    // .setState({
    //   places: response 
    // })
}
  render() {
    return (
      <div>Healthy</div>
    );
  }
}

export default App;