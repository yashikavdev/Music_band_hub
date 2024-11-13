import axios from 'axios';

const GEOLOCATION_API_URL = 'https://get.geojs.io/v1/ip/geo.json';

export const fetchLocationByIP = async () => {
  try {
    const response = await axios.get(GEOLOCATION_API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch location');
  }
};
