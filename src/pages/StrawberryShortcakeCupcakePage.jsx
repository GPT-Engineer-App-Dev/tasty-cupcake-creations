import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const StrawberryShortcakeCupcakePage = () => (
  <Box p={5}>
    <Text fontSize="2xl" fontWeight="bold">Strawberry Shortcake Cupcake</Text>
    <Image src="/images/strawberry-cupcake.jpg" alt="Strawberry Shortcake Cupcake" />
    <Text mt={2}>Sweet strawberry cupcakes with a fresh strawberry topping.</Text>
    <Text mt={2}>Ingredients and detailed instructions will be added here.</Text>
    <Button as={Link} to="/recipes" colorScheme="pink" mt={3}>Back to Recipes</Button>
  </Box>
);

export default StrawberryShortcakeCupcakePage;