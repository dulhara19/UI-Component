// src/components/ForgotPassword.jsx
import { Theme, Box, Heading, TextField, Button, Flex, Text } from '@radix-ui/themes';

function ForgotPassword() {
  return (
    <Theme>
      <Flex align="center" justify="center" height="100vh" p="4">
        <Box width="350px" p="4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} borderRadius="large">
          <Heading size="6" mb="4" align="center">Reset Your Password 🔐</Heading>

          <Text size="2" mb="3" align="center">
            Enter your email address and we'll send you a link to reset your password.
          </Text>

          <Flex direction="column" gap="2" mb="4">
            <Text as="label" size="2">Email</Text>
            <TextField.Root placeholder="you@example.com" />
          </Flex>

          <Button size="3" style={{ width: '100%' }} mb="3">Send Reset Link</Button>

          <Text size="2" align="center">
            Remembered your password?{' '}
            <Text as="a" color="blue" href="/login" style={{ cursor: 'pointer' }}>
              Log in
            </Text>
          </Text>
        </Box>
      </Flex>
    </Theme>
  );
}

export default ForgotPassword;
