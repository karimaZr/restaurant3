import './Header.css';
import { SubHeading } from '../../components';
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/Card';
import Map from '../maps/Map'

const Header = () => {
  const [zones, setZones] = useState([]);
  const [city, setCities] = useState([]);
  const [specialité, setSpecialité] = useState([]);
  const [zoneId, setZoneId] = useState("");
  const [specialiteId, setSpecialiteId] = useState("");
  // const [restaurants, setRestaurants] = useState([]);
  const [restoCord, setRestoCord] = useState([]);
  const [restoName, setRestoName] = useState([]);
  const [restoAddress, setRestoAddress] = useState([]);
  const [restoImg, setImg] = useState([]);
  const [restoSite, setSite] = useState([]);
  const [cityCord, setCords] = useState([]);
  const[restaurants,setRestaurants]=useState([]);

  

  const getZonesByCity = async (cityId) => {
    try {
      const response = await axios.get('https://near-9hdh.vercel.app/api/zones');
      const zones = response.data.filter((zone) => zone.city === cityId);
      setZones(zones);
    } catch (error) {
      console.error(error);
    }
  };
  const getSpecialité = async () => {
    try {
      const response = await axios.get('https://near-9hdh.vercel.app/api/specialities');
      console.log(response);
      setSpecialité(response.data);


    } catch (error) {
      console.error(error);
    }
  };


  const fetchCities = async () => {
    try {
      const response = await axios.get('https://near-9hdh.vercel.app/api/cities');
      setCities(response.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  const handleCountry = (event) => {
    const id = event.target.value;
    setRestoCord([]);
    getZonesByCity(id);
  };
  
  
  useEffect(() => {

    fetchCities();
    
    getSpecialité();

  }, []);
  const handleZoneChange = (event) => {
    const id = event.target.value;
    setZoneId(id);
  };

  const handleSpecialiteChange = (event) => {
    const id = event.target.value;
    setSpecialiteId(id);
  };   


const getRestaurantsByZoneAndSpecialite = async () => {
  try {
    const response = await axios.get('https://near-9hdh.vercel.app/api/restos');
    const filteredRestaurants = response.data.filter((restaurant) => {
      return (
        restaurant.zone === zoneId &&
        restaurant.specialite === specialiteId
      );
    });
    setRestaurants(filteredRestaurants);
    const coordinates = filteredRestaurants.map((restaurant) => ({
      lat: restaurant.cords[0], // Assuming the latitude is at index 0
      lng: restaurant.cords[1], // Assuming the longitude is at index 1
    }));
    const names = filteredRestaurants.map((restaurant) => restaurant.name);
    const addresses = filteredRestaurants.map((restaurant) => restaurant.adresse);
    const img = filteredRestaurants.map((restaurant) => restaurant.image);
    const site = filteredRestaurants.map((restaurant) => restaurant.site);
    setRestoCord(coordinates);
    setImg(img);
    setRestoName(names);
    setRestoAddress(addresses);
    // setRestaurants(response.data);
    setSite(site);
    
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    if (zoneId && specialiteId) {
      getRestaurantsByZoneAndSpecialite();
    }
  }, [zoneId, specialiteId]);
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading />
        <h1 className='app__header-h1'>Bienvenue!</h1>
        <div className="row mb-3">
          <div className="form-group-col-md-4">
            <label className="app__header-label">Country</label><tr></tr>
            <select name="city" className="form-control" onChange={(e) => handleCountry(e)}>
              <option>--Selectionnez  ville--</option>
              {city.map((city) => (
                <option key={city._id} value={city._id}> {city.name}</option>
              ))
              }

            </select>
          </div>
          <div className="form-group-col-md-4">
            <label className="app__header-label">Zone</label><br></br>
            <select name="state" id="state" className="form-control" onChange={(e) => handleZoneChange(e)}>
              <option>--Selectionnez Zone--</option>
              {zones.map((zone) => (
                <option key={zone._id} value={zone._id}>{zone.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group-col-md-4">
            <label className="app__header-label">Specialité</label><br></br>
            <select name="specialité" id="specialité" className="form-control" onChange={(e) => handleSpecialiteChange(e)}>
              <option>--Selectionnez Specialité--</option>
              {specialité.map((spécialité) => (
                <option key={spécialité._id} value={spécialité._id}>{spécialité.name}</option>
              ))}
            </select>
            <div className="form-group-col-md-4">
              <label className="app__header-label">Restaurants</label>
              <br />
              <>
                <div className='container'>
                  <div className='row'>
                    {restaurants.map((restaurant) => (
                      <Card image={restaurant.image} name={restaurant.name} adresse={restaurant.adresse} 
                      site={restaurant.site}/>

                    ))}
                  </div>

                </div>
              </>
            </div>

          
          </div>
        </div>


      </div>
      <Map restoCord={restoCord} restoName={restoName} restoAdress={restoAddress} restoImg={restoImg} 
  restoSite={restoSite} cityCord={cityCord} />

    </div>
    
  )
}

export default Header;