import React from 'react';
import { Box, Card, Flex, Heading, Text, Button, Separator } from '@radix-ui/themes';
import { FaTrashAlt } from 'react-icons/fa';

const dummyCartItems = [
  {
    id: 1,
    name: 'Valentine Rose Box',
    price: 49.99,
    quantity: 1,
    image: 'https://example.com/rose-box.jpg',
  },
  {
    id: 2,
    name: 'Birthday Teddy Bear',
    price: 29.99,
    quantity: 2,
    image: 'https://example.com/teddy.jpg',
  },
];

const Cart = () => {
  const calculateTotal = () => {
    return dummyCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Box px="5" py="6">
      <Heading size="6" mb="4">Your Shopping Cart</Heading>

      <Card style={{ padding: '1.5rem', borderRadius: '1rem' }}>
        {dummyCartItems.map(item => (
          <Flex key={item.id} align="center" justify="between" mb="4">
            <Flex align="center" gap="4">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '0.75rem' }}
              />
              <Box>
                <Text size="4" weight="medium">{item.name}</Text>
                <Text size="2" color="gray">Qty: {item.quantity}</Text>
                <Text size="3" color="crimson">${(item.price * item.quantity).toFixed(2)}</Text>
              </Box>
            </Flex>
            <Button variant="ghost" color="red" size="2">
              <FaTrashAlt />
            </Button>
          </Flex>
        ))}

        <Separator my="4" />

        <Flex justify="between" align="center">
          <Text size="4" weight="medium">Total</Text>
          <Text size="4" color="crimson" weight="bold">${calculateTotal()}</Text>
        </Flex>

        <Button size="3" color="crimson" mt="4" style={{ width: '100%' }}>
          Proceed to Checkout
        </Button>
      </Card>
    </Box>
  );
};

export default Cart;
