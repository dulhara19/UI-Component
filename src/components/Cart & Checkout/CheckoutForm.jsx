import React, { useState } from 'react';
import { Box, Card, Heading, TextField, Button, Flex, Text, Separator, Select } from '@radix-ui/themes';

const CheckoutForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, handle payment and order here
    alert('Order placed successfully!');
  };

  return (
    <Box px="5" py="6">
      <Heading size="6" mb="4">Checkout</Heading>

      <Card style={{ padding: '1.5rem', borderRadius: '1rem' }}>
        <form onSubmit={handleSubmit}>
          <Heading size="4" mb="3">Shipping Information</Heading>

          <Flex direction="column" gap="3" mb="4">
            <TextField.Root>
              <TextField.Input
                placeholder="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </TextField.Root>

            <TextField.Root>
              <TextField.Input
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </TextField.Root>

            <TextField.Root>
              <TextField.Input
                placeholder="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </TextField.Root>

            <Flex gap="3">
              <TextField.Root style={{ flex: 1 }}>
                <TextField.Input
                  placeholder="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </TextField.Root>

              <TextField.Root style={{ flex: 1 }}>
                <TextField.Input
                  placeholder="Zip Code"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                />
              </TextField.Root>
            </Flex>

            <Select.Root
              defaultValue="Sri Lanka"
              onValueChange={(val) => setForm({ ...form, country: val })}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="Sri Lanka">Sri Lanka</Select.Item>
                <Select.Item value="USA">USA</Select.Item>
                <Select.Item value="UK">UK</Select.Item>
                <Select.Item value="India">India</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Separator my="4" />

          <Heading size="4" mb="3">Payment Information</Heading>

          <Flex direction="column" gap="3">
            <TextField.Root>
              <TextField.Input
                placeholder="Card Number"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                required
              />
            </TextField.Root>

            <Flex gap="3">
              <TextField.Root style={{ flex: 1 }}>
                <TextField.Input
                  placeholder="MM/YY"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  required
                />
              </TextField.Root>

              <TextField.Root style={{ flex: 1 }}>
                <TextField.Input
                  placeholder="CVV"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  required
                />
              </TextField.Root>
            </Flex>
          </Flex>

          <Button type="submit" size="3" color="crimson" mt="4" style={{ width: '100%' }}>
            Place Order
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default CheckoutForm;
