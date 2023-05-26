import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({ restoCord, restoAdress, restoName, restoImg, restoSite, cityCord }) => {
  const [zone, setZone] = useState({ center: [33.74059917546109, -7.238578523576559], zoom: 6 });

  useEffect(() => {
    setZone((prevZone) => ({
      ...prevZone,
      center: cityCord,
    }));
  }, [cityCord]);
  

  return (
    <div style={{ height: '750px', width: '100%' }}>
      {zone && (
        <MapContainer
          center={zone.center}
          zoom={zone.zoom}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
          {restoCord &&
            restoCord.map((coord, index) => (
              <Marker position={coord} icon={customIcon} key={index}>
                <Popup>
                  <div>
                    <img src={restoImg[index]} alt="" style={{ width: '100px', height: '100px' }} />
                    <h3>{restoName[index]}</h3>
                    <p>{restoAdress[index]}</p>
                    <a href={restoSite[index]} className="card-link">
                      Plus Détails
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
