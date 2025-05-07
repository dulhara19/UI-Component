import React from 'react';
import { Box, Flex, Heading, Card, Text, Separator, Button } from '@radix-ui/themes';
import { FaHeart, FaStar } from 'react-icons/fa';

const featuredGifts = [
  {
    name: 'Valentine Rose Box',
    price: '$49.99',
    description: 'Elegant box with fresh roses & chocolates.',
    icon: <FaHeart color="red" size={24} />,
    special: true,
  },
  {
    name: 'Christmas Hamper',
    price: '$79.99',
    description: 'A festive basket full of seasonal treats.',
    icon: <FaStar color="#FFD700" size={22} />,
  },
  {
    name: 'Birthday Surprise Pack',
    price: '$39.99',
    description: 'Balloons, cake, and a gift card—all in one!',
    icon: <FaStar color="#06D6A0" size={22} />,
  },
];

const FeaturedGifts = () => {
  return (
    <Box py="6" px="4">
      <Heading size="5" align="center" weight="bold" mb="3">
        🎉 Featured Gifts of the Season
      </Heading>
      <Text align="center" color="gray" size="3" mb="4">
        Specially selected gifts perfect for every celebration.
      </Text>
      <Separator size="4" my="4" />

      <Flex wrap="wrap" justify="center" gap="4">
        {featuredGifts.map((gift, index) => {
          const isSpecial = gift.special;

          return (
            <Card
              key={index}
              style={{
                width: 240,
                padding: '1.5rem',
                backgroundColor: isSpecial ? 'pink' : '#fff', // Crimson
                color: isSpecial ? 'black' : '#000',
                borderRadius: '1rem',
                boxShadow: isSpecial
                  ? '0 10px 25px rgba(255, 0, 191, 0.5)'
                  : '0 4px 12px rgba(255, 0, 0, 0.88)',
                transform: isSpecial ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (isSpecial) e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                if (isSpecial) e.currentTarget.style.transform = 'scale(1.03)';
              }}
            >
              <Flex direction="column" align="center" gap="2">
                {gift.icon}
                <Heading size="4" align="center">{gift.name}</Heading>
                <Text color='' size="2" align="center">{gift.description}</Text>
                <Text size="3" weight="medium">{gift.price}</Text>
                <Button
                  variant={isSpecial ? 'ghost' : 'solid'}
                  color={isSpecial ? 'crimson' : 'indigo'}
                  mt="2"
                >
                  Buy Now
                </Button>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </Box>
  );
};

export default FeaturedGifts;
