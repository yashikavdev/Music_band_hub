import { Box, Container, Heading, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const Header = () => {
  const headerHeight = useBreakpointValue({ base: '50vh', md: '60vh' });
  
  return (
    <Box 
      h={headerHeight}
      bg="linear-gradient(135deg, #6B46C1 0%, #3182CE 100%)"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgGradient="radial-gradient(circle, white 1px, transparent 1px)"
        backgroundSize="30px 30px"
      />
      <Container 
        maxW="container.xl" 
        h="100%" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <VStack 
          spacing={6} 
          textAlign="center"
          px={4}
          animation="fadeIn 1s ease-in"
        >
          <Heading 
            as="h1" 
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, whiteAlpha.900, whiteAlpha.600)"
            bgClip="text"
            letterSpacing="tight"
            textTransform="uppercase"
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
          >
            Music Band Finder
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="medium"
            color="whiteAlpha.900"
            maxW="2xl"
            lineHeight="tall"
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Discover recently founded bands in your area and explore the latest additions to your local music scene
          </Text>
          <Box
            position="absolute"
            top="50%"
            left="0"
            right="0"
            height="1px"
            bgGradient="linear(to-r, transparent, whiteAlpha.300, transparent)"
          />
        </VStack>
      </Container>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="100px"
        bgGradient="linear(to-t, gray.50, transparent)"
      />
    
    </Box>
  );
};

export default Header;