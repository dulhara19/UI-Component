// src/components/LoginPage.jsx
import { Theme, Box, Heading, TextField, Button, Flex, Text, Separator } from '@radix-ui/themes';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function LoginPage() {
  return (
    <Theme>
      <Flex align="center" justify="center" height="100vh" p="4">
        <Box width="350px" p="4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} borderRadius="large">
          <Heading size="6" mb="4" align="center">Login to Giftify 🎁</Heading>

          {/* Social Login */}
          <Flex direction="column" gap="3" mb="4">
            <Button variant="soft" size="3" style={{ justifyContent: 'start' }}>
              <FcGoogle size={22} style={{ marginRight: '10px' }} />
              Continue with Google
            </Button>

            <Button variant="soft" color="blue" size="3" style={{ justifyContent: 'start' }}>
              <FaFacebook size={22} style={{ marginRight: '10px' }} />
              Continue with Facebook
            </Button>
          </Flex>

          <Separator my="3" />

          {/* Email/Password Form */}
          <Flex direction="column" gap="2" mb="4">
            <Text as="label" size="2">Email</Text>
            <TextField.Root placeholder="you@example.com" />

            <Text as="label" size="2">Password</Text>
            <TextField.Root type="password" placeholder="Enter your password" />
          </Flex>

          <Button size="3" style={{ width: '100%' }} mb="3">Login</Button>

          <Text size="2" align="center">
            Don't have an account?{' '}
            <Text as="a" color="blue" href="/register" style={{ cursor: 'pointer' }}>
              Sign up
            </Text>
          </Text>
        </Box>
      </Flex>
    </Theme>
  );
}

export default LoginPage;
