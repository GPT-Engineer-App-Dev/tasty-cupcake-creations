import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ClassicVanillaCupcakePage = () => (
  <Box p={5}>
    <Text fontSize="2xl" fontWeight="bold">Classic Vanilla Cupcake</Text>
    <Image src="/images/vanilla-cupcake.jpg" alt="Classic Vanilla Cupcake" />
    <Text mt={2}>Light and fluffy cupcakes with a creamy vanilla frosting.</Text>
    <Text mt={2}>Ingredients and detailed instructions will be added here.</Text>
    <Button as={Link} to="/recipes" colorScheme="pink" mt={3}>Back to Recipes</Button>
  </Box>
);

export default ClassicVanillaCupcakePage;