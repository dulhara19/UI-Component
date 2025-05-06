// src/components/LoginPage.jsx
import { Theme, Box, Heading, TextField, Button, Flex, Text } from '@radix-ui/themes';

function LoginPage() {
  return (
    <Theme>
      <Flex align="center" justify="center" height="100vh">
        <Box width="300px" p="4" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }} borderRadius="large">
          <Heading size="6" mb="4" align="center">Login to Giftify</Heading>

          <Text as="label" size="2">Email</Text>
          <TextField.Root placeholder="you@example.com" mb="3" />

          <Text as="label" size="2">Password</Text>
          <TextField.Root type="password" placeholder="Enter your password" mb="4" />

          <Button size="3" style={{ width: '100%' }}>Login</Button>
        </Box>
      </Flex>
    </Theme>
  );
}

export default LoginPage;
