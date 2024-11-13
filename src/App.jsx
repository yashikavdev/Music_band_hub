import { useState, useEffect ,useCallback} from 'react';
import { Box, Flex ,VStack} from '@chakra-ui/react';
import { searchBandsByLocation } from './api/musicBrainzApi';
import { useGeolocation } from './hooks/useGeolocation';
import Container from './components/Layout/Container';
import SearchBar from './components/Search/SearchBar';
import BandGrid from './components/Bands/BandGrid';

const App = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { 
    location: userLocation, 
  } = useGeolocation();

  const handleSearch = async (location) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchBandsByLocation(location);
      setBands(results);
    } catch (err) {
      setError('Failed to fetch bands. Please try again.');
    } finally {
      setLoading(false);
    }
  };
 



  useEffect(() => {
    if (userLocation) {
      handleSearch(userLocation);
    }
  }, [userLocation]);

  return (
    <Flex
    direction="column"
    minH="100vh"
    w="100%"
    align="center"
    bg="gray.50"
  >
    <VStack
      flex="1"
      w="100%"
      spacing={0}
      align="center"
    >
      <Container>
        <VStack
          spacing={8}
          w="100%"
          maxW={{ base: "100%", md: "90%", lg: "80%" }}
          mx="auto"
        >
          <SearchBar 
            onSearch={handleSearch} 
            initialLocation={userLocation} 
          />
        
          <BandGrid 
            bands={bands} 
            loading={loading} 
          />
        </VStack>
      </Container>
    </VStack>
  </Flex>
  );
};

export default App;