import React, { useEffect } from 'react';
import '../styles/map.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const MapSection = () => {
 useEffect(() => {
     // Prevent "already initialized" error
     const mapContainer = document.getElementById('map');
     if (mapContainer._leaflet_id) {
       mapContainer._leaflet_id = null; // Reset the ID so Leaflet can reinitialize
     }
 
     const map = L.map('map').setView([12.9716, 77.5946], 13);
 
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; OpenStreetMap contributors'
     }).addTo(map);
 
     L.marker([12.9716, 77.5946]).addTo(map)
       .bindPopup('Global Habitat Location')
       .openPopup();
   }, []);

  return (
    <div className="map-container">
          <div id="map" style={{ height: '400px', width: '80%', margin: '50px auto', borderRadius: '10px' }}></div>

      
     
    </div>
  );
};

export default MapSection;