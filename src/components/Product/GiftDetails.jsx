import React from 'react';
import { Box, Card, Flex, Heading, Text, Button, Separator } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const giftData = {
  id: '1',
  name: 'Valentine Rose Box',
  price: '$49.99',
  description: 'This beautiful rose box contains hand-picked roses and premium chocolates. A perfect gift to express your love.',
  image: 'https://example.com/valentine-rose-box.jpg', // Replace with real image URL
  tags: ['Romantic', 'Limited Edition', 'Valentine'],
};

const GiftDetails = () => {
  const { giftId } = useParams(); // for future dynamic routing

  return (
    <Box px="5" py="6">
      <Card
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '2rem',
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
          borderRadius: '1.5rem',
        }}
      >
        <Flex direction={{ initial: 'column', md: 'row' }} gap="5">
          {/* Left: Image */}
          <Box style={{ flex: 1 }}>
            <img
              src={giftData.image}
              alt={giftData.name}
              style={{
                width: '100%',
                borderRadius: '1rem',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Right: Details */}
          <Flex direction="column" gap="3" style={{ flex: 2 }}>
            <Heading size="5">{giftData.name}</Heading>
            <Text size="4" weight="medium" color="crimson">{giftData.price}</Text>
            <Separator size="4" />
            <Text size="3" color="gray">{giftData.description}</Text>

            <Flex gap="2" wrap="wrap" mt="3">
              {giftData.tags.map((tag, i) => (
                <Text
                  key={i}
                  size="2"
                  style={{
                    backgroundColor: '#eee',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    fontWeight: '500',
                  }}
                >
                  #{tag}
                </Text>
              ))}
            </Flex>

            <Button mt="4" color="crimson" variant="solid" size="3">
              <FaHeart style={{ marginRight: '0.5rem' }} />
              Add to Cart
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};

export default GiftDetails;
