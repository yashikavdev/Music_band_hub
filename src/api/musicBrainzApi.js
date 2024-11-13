import axios from 'axios';

const MUSICBRAINZ_API_URL = 'https://musicbrainz.org/ws/2';
const LAST_N_YEARS = 10;
const MAX_RESULTS = 50;

const getStartDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - LAST_N_YEARS);
  return date.toISOString().split('T')[0];
};

export const searchBandsByLocation = async (location) => {
  try {
    const startDate = getStartDate();
    const response = await axios.get(`${MUSICBRAINZ_API_URL}/artist`, {
      params: {
        query: `area:${location} AND begin:[${startDate} TO *]`,
        fmt: 'json',
        limit: MAX_RESULTS,
      },
      headers: {
        'User-Agent': 'MusicBandFinder/1.0.0',
      },
    });
    return response.data.artists;
  } catch (error) {
    throw new Error('Failed to fetch bands');
  }
};