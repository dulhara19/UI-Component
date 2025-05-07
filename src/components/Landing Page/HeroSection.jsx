import React from 'react';
import { Box, Flex, Heading, Text, Card, Separator } from '@radix-ui/themes';
import { FaShippingFast, FaGift, FaSmile, FaHeadset } from 'react-icons/fa';

const features = [
  {
    title: 'Fast Delivery',
    description: 'We deliver gifts quickly and safely to your loved ones.',
    icon: <FaShippingFast size={24} color="#5E60CE" />,
  },
  {
    title: 'Custom Gifts',
    description: 'Personalized gifts for every occasion, made with love.',
    icon: <FaGift size={24} color="#F77F00" />,
  },
  {
    title: '24/7 Support',
    description: 'Have questions? We are always here to help you.',
    icon: <FaHeadset size={24} color="#06D6A0" />,
  },
  {
    title: 'Guaranteed Smile',
    description: 'Make every moment memorable with thoughtful gifts.',
    icon: <FaSmile size={24} color="#EF476F" />,
  },
];

const HeroSection = () => {
  return (
    <Box py="6" px="4" style={{ backgroundColor: '#fdfdfd' }}>
      <Flex direction="column" align="center" gap="4">
        <Heading size="6" align="center" weight="bold">
          Welcome to JoyBox Gift Shop 🎁
        </Heading>
        <Text size="4" align="center" color="gray">
          Your one-stop destination for meaningful and memorable gifts.
        </Text>
        <Separator size="4" my="4" />

        <Flex wrap="wrap" justify="center" gap="4" mt="4">
          {features.map((feature, index) => (
            <Card key={index} style={{ width: 250, padding: '1.5rem' }}>
              <Flex direction="column" align="center" gap="2">
                {feature.icon}
                <Heading size="4" align="center">
                  {feature.title}
                </Heading>
                <Text align="center" color="gray">
                  {feature.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
