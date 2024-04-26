import { Box, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';
import { FaUtensils } from 'react-icons/fa';

const recipes = [
  {
    id: 1,
    name: "Classic Vanilla Cupcake",
    description: "Light and fluffy cupcakes with a creamy vanilla frosting.",
    imageUrl: "/images/vanilla-cupcake.jpg"
  },
  {
    id: 2,
    name: "Rich Chocolate Cupcake",
    description: "Decadent chocolate cupcakes topped with chocolate ganache.",
    imageUrl: "/images/chocolate-cupcake.jpg"
  },
  {
    id: 3,
    name: "Strawberry Shortcake Cupcake",
    description: "Sweet strawberry cupcakes with a fresh strawberry topping.",
    imageUrl: "/images/strawberry-cupcake.jpg"
  }
];

const Index = () => {
  return (
    <Box p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>Cupcake Recipes</Text>
      <SimpleGrid columns={3} spacing={10}>
        {recipes.map(recipe => (
          <Box key={recipe.id} boxShadow="md" p={5} rounded="md">
            <Image src={recipe.imageUrl} alt={recipe.name} borderRadius="md" />
            <Text fontSize="xl" fontWeight="bold" mt={2}>{recipe.name}</Text>
            <Text mt={2}>{recipe.description}</Text>
            <Button rightIcon={<FaUtensils />} colorScheme="pink" variant="solid" mt={3}>
              View Recipe
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;