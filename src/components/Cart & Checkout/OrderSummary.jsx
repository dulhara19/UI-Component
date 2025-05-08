import React from 'react';
import { Box, Card, Heading, Text, Flex, Separator, Button } from '@radix-ui/themes';

const OrderSummary = ({ items }) => {
  const calculateSubtotal = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const shippingCost = 4.99;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  return (
    <Box px="5" py="6">
      <Heading size="6" mb="4">Order Summary</Heading>

      <Card style={{ padding: '1.5rem', borderRadius: '1rem' }}>
        <Flex direction="column" gap="3">
          {items.map((item, idx) => (
            <Flex key={idx} justify="between">
              <Text>{item.name} × {item.quantity}</Text>
              <Text>${(item.price * item.quantity).toFixed(2)}</Text>
            </Flex>
          ))}

          <Separator my="3" />

          <Flex justify="between">
            <Text>Subtotal</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </Flex>

          <Flex justify="between">
            <Text>Shipping</Text>
            <Text>${shippingCost.toFixed(2)}</Text>
          </Flex>

          <Separator my="3" />

          <Flex justify="between">
            <Text weight="bold">Total</Text>
            <Text weight="bold">${total.toFixed(2)}</Text>
          </Flex>

          <Button color="green" variant="soft" mt="4" style={{ width: '100%' }}>
            Confirm & Pay
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};

export default OrderSummary;
