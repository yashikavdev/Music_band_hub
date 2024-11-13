import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              resolve,
              reject,
              {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
              }
            );
          });
          const { latitude, longitude } = position.coords;
          const response = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          if (response.data.city) {
            setLocation(response.data.city);
          } else {
            const ipResponse = await axios.get('https://get.geojs.io/v1/ip/geo.json');
            setLocation(ipResponse.data.city);
          }
        } else {
          const response = await axios.get('https://get.geojs.io/v1/ip/geo.json');
          setLocation(response.data.city);
        }
      } catch (err) {
        console.error('Location error:', err);
        try {
          const response = await axios.get('https://get.geojs.io/v1/ip/geo.json');
          setLocation(response.data.city);
        } catch (fallbackErr) {
          setError('Unable to determine location. Please enter your city manually.');
        }
      } finally {
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  return { location, loading, error };
};