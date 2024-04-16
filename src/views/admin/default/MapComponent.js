// MapComponent.js
import { useEffect, useState } from 'react';

function MapComponent({ dustbins, predefinedPOIs }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCloOFxFC3egPYUQFHQ2GaD1Tmtt9Pc6Zg&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
  
    script.onload = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.1300, lng: 72.8244 },
        zoom: 14
      });
      setMap(mapInstance);
  
      // Add markers for predefined POIs
      predefinedPOIs.forEach(poi => addMarker(poi));
  
      // Add markers for bin locations
      dustbins.forEach(dustbin => addMarker(dustbin));
    };
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const addMarker = (locationInfo) => {
    if (map) {
      const markerIcon = getMarkerIcon(locationInfo.capacity);
      const marker = new window.google.maps.Marker({
        position: locationInfo.location,
        map: map,
        title: locationInfo.name,
        icon: markerIcon
      });
  
      const infoWindowContent = '<div class="info-window"><strong>' + locationInfo.name + '</strong><br>Capacity: ' + locationInfo.capacity + '</div>';
  
      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContent
      });
  
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
  };

  const getMarkerIcon = (capacity) => {
    if (capacity === "Full") {
      return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    } else if (capacity === "Half Full") {
      return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    } else {
      return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    }
  };

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
}

export default MapComponent;
