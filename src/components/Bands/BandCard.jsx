import {
  Box,
  Heading,
  Text,
  Tag,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CalendarIcon, InfoIcon } from '@chakra-ui/icons';

const BandCard = ({ band }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      _hover={{ 
        shadow: 'lg',
        transform: 'translateY(-2px)',
      }}
      transition="all 0.2s"
    >
      <Box p={6}>
        <Heading 
          as="h3" 
          size="md" 
          mb={3}
          noOfLines={2}
        >
          {band.name}
        </Heading>
        <VStack align="stretch" spacing={2}>
          {band['life-span']?.begin && (
            <HStack>
              <CalendarIcon color="purple.500" />
              <Text color="gray.600">
                Founded: {band['life-span'].begin}
              </Text>
            </HStack>
          )}
          {band.area?.name && (
            <HStack>
              <InfoIcon color="purple.500" />
              <Text color="gray.600">
                {band.area.name}
              </Text>
            </HStack>
          )}
        
        </VStack>
      </Box>
    </Box>
  );
};

export default BandCard;