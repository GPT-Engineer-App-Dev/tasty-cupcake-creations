import React from 'react';
import { Box, Text, Image, SimpleGrid, Button, VStack, Heading, Link as RouterLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

const categories = {
  classic: {
    title: "Classic Flavors",
    recipes: [
      {
        id: 1,
        name: "Classic Vanilla Cupcake",
        description: "Light and fluffy cupcakes with a creamy vanilla frosting.",
        imageUrl: "/images/vanilla-cupcake.jpg",
        details: "This classic vanilla cupcake recipe is perfect for any occasion. It uses simple ingredients and is topped with a rich and creamy vanilla frosting."
      }
    ]
  },
  chocolate: {
    title: "Chocolate Lovers",
    recipes: [
      {
        id: 2,
        name: "Rich Chocolate Cupcake",
        description: "Decadent chocolate cupcakes topped with chocolate ganache.",
        imageUrl: "/images/chocolate-cupcake.jpg",
        details: "For those who can't get enough chocolate, this cupcake offers a deep, rich chocolate flavor complemented by a smooth chocolate ganache."
      }
    ]
  },
  fruit: {
    title: "Fruit Infused",
    recipes: [
      {
        id: 3,
        name: "Strawberry Shortcake Cupcake",
        description: "Sweet strawberry cupcakes with a fresh strawberry topping.",
        imageUrl: "/images/strawberry-cupcake.jpg",
        details: "These delightful cupcakes are infused with fresh strawberries and topped with a light, fluffy cream. Perfect for summer days."
      }
    ]
  }
};

const Recipes = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>Cupcake Recipes</Heading>
      {Object.entries(categories).map(([key, category]) => (
        <VStack key={key} align="stretch" mb={10}>
          <Text fontSize="2xl" fontWeight="bold">{category.title}</Text>
          <SimpleGrid columns={3} spacing={10}>
            {category.recipes.map(recipe => (
              <Box key={recipe.id} boxShadow="md" p={5} rounded="md">
                <Image src={recipe.imageUrl} alt={recipe.name} borderRadius="md" />
                <Text fontSize="xl" fontWeight="bold" mt={2}>{recipe.name}</Text>
                <Text mt={2}>{recipe.description}</Text>
                {recipe.id === 1 && (
                  <Button rightIcon={<FaUtensils />} colorScheme="pink" variant="solid" mt={3} as={RouterLink} to="/recipes/classic-vanilla">
                    View Recipe
                  </Button>
                )}
                {recipe.id === 2 && (
                  <Button rightIcon={<FaUtensils />} colorScheme="pink" variant="solid" mt={3} as={RouterLink} to="/recipes/rich-chocolate">
                    View Recipe
                  </Button>
                )}
                {recipe.id === 3 && (
                  <Button rightIcon={<FaUtensils />} colorScheme="pink" variant="solid" mt={3} as={RouterLink} to="/recipes/strawberry-shortcake">
                    View Recipe
                  </Button>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      ))}
    </Box>
  );
};

export default Recipes;