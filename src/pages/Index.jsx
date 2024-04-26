import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Index = () => (
  <Box p={5}>
    <Heading as="h1" size="xl" mb={6}>Welcome to Cupcake Recipes</Heading>
    <Button as={Link} to="/recipes" colorScheme="pink" size="lg">Explore Recipes</Button>
  </Box>
);

export default Index;