import React from 'react';
import { Card, Flex, Text, Button, Box, Badge } from '@radix-ui/themes';
import { FaShoppingCart } from 'react-icons/fa';

const GiftCard = ({ gift, onAddToCart }) => {
  const { id, name, description, price, image, label } = gift;

  return (
    <Card size="3" style={{ width: '300px', borderRadius: '20px', boxShadow: '8px 8px 20px #d1d1d1, -8px -8px 20px #ffffff' }}>
      <Box mb="3" style={{ height: '200px', overflow: 'hidden', borderRadius: '12px' }}>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />
      </Box>

      <Flex direction="column" gap="2">
        <Flex justify="between" align="center">
          <Text size="4" weight="bold">{name}</Text>
          {label && <Badge color="crimson">{label}</Badge>}
        </Flex>

        <Text size="2" color="gray">
          {description}
        </Text>

        <Text size="3" weight="medium" color="green">
          ${price}
        </Text>

        <Button
          variant="solid"
          color="crimson"
          radius="full"
          onClick={() => onAddToCart(id)}
          style={{
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '4px 4px 10px #ccc',
          }}
        >
          <FaShoppingCart />
          Add to Cart
        </Button>
      </Flex>
    </Card>
  );
};

export default GiftCard;
