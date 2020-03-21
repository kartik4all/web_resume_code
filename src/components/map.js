
import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const mapStyles = {
  width: 'inherit',
  height: '100%',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map id="mapContent"
        google={window.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 28.7130,
         lng: 77.1068
        }}
       
        streetViewControl={false}
        mapTypeControl={false}
    fullscreenControl={false}
      >
          <Marker
        name={'Current location'} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHi5ryWgN1FcZI-Hmqw3AdxJQmpopYJGk'
})(MapContainer);