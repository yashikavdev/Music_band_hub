import {
  SimpleGrid,
  Box,
  Spinner,
  Text,
  Center,
  Container,
} from '@chakra-ui/react';
import BandCard from './BandCard';

const BandGrid = ({ bands, loading }) => {
  if (loading) {
    return (
      <Center py={12}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.500"
          size="xl"
        />
      </Center>
    );
  }

  if (!bands.length) {
    return (
      <Center py={12}>
        <Text fontSize="lg" color="gray.600">
          No bands found for this location.
        </Text>
      </Center>
    );
  }

  return (
    <Container maxW="container.xl" p={0}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        py={8}
      >
        {bands.map(band => (
          <BandCard key={band.id} band={band} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BandGrid;