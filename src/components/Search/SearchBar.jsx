import { useState } from 'react';
import {
  FormControl,
  Input,
  Button,
  HStack,
  Box,
  Container,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ onSearch, initialLocation }) => {
  const [location, setLocation] = useState(initialLocation || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <Box w="100%">
      <Container maxW="container.md" py={6}>
        <form onSubmit={handleSubmit}>
          <HStack spacing={4}>
            <FormControl>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city name..."
                size="lg"
                bg="white"
                _hover={{ borderColor: 'purple.400' }}
                _focus={{ 
                  borderColor: 'purple.500', 
                  boxShadow: '0 0 0 1px purple.500' 
                }}
                borderRadius="full"
              />
            </FormControl>
            <Button
              leftIcon={<SearchIcon />}
              type="submit"
              size="lg"
              colorScheme="purple"
              px={8}
              minW="120px"
              borderRadius="full"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.2s"
            >
              Search
            </Button>
          </HStack>
        </form>
      </Container>
    </Box>
  );
};

export default SearchBar;
