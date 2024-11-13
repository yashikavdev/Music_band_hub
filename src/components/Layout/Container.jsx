import { Container as ChakraContainer, VStack } from '@chakra-ui/react';

const Container = ({ children }) => (
  <ChakraContainer
    maxW="container.xl"
    py={8}
    px={4}
    minH="calc(100vh - 70vh)"
    display="flex"
    flexDirection="column"
  >
    <VStack
      spacing={8}
      align="stretch"
      justify="flex-start"
      w="100%"
      flex="1"
    >
      {children}
    </VStack>
  </ChakraContainer>
);

export default Container;