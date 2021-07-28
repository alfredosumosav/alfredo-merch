import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: Number(data.lat),
    lng: Number(data.lng),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCJCWEhadzrRv_PdTCViV8DNJ4IwggEeQM">
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={17}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
