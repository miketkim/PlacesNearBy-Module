import React, { Component } from 'react';

class PlacesNearby extends Component {
    render() {
        return (
            <div>
                {this.props.places.map(place => {place.id})}              
            </div>
        );
    }
}

export default PlacesNearby;