import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RichChocolateCupcakePage = () => (
  <Box p={5}>
    <Text fontSize="2xl" fontWeight="bold">Rich Chocolate Cupcake</Text>
    <Image src="/images/chocolate-cupcake.jpg" alt="Rich Chocolate Cupcake" />
    <Text mt={2}>Decadent chocolate cupcakes topped with chocolate ganache.</Text>
    <Text mt={2}>Ingredients and detailed instructions will be added here.</Text>
    <Button as={Link} to="/recipes" colorScheme="pink" mt={3}>Back to Recipes</Button>
  </Box>
);

export default RichChocolateCupcakePage;