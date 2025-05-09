// src/components/RegisterPage.jsx
import { Theme, Box, Heading, TextField, Button, Flex, Text, Separator } from '@radix-ui/themes';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

function RegisterPage() {
  return (
    <Theme colorScheme="light" fontSize="medium" space="medium" radius="large">
      <Flex align="center" justify="center" height="100vh" p="4">
        <Box width="350px" p="4" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} borderRadius="large">
          <Heading size="6" mb="4" align="center">Create an Account </Heading>

          {/* Social Sign Up */}
          <Flex direction="column" gap="3" mb="4">

            <Button variant="soft" size="3" style={{ justifyContent: 'start' }} onClick={handleGoogleSignUp}>
             <FcGoogle size={22} style={{ marginRight: '10px' }} />
             Sign up with Google
          </Button>

            <Button variant="soft" color="blue" size="3" style={{ justifyContent: 'start' }}>
              <FaFacebook size={22} style={{ marginRight: '10px' }} />
              Sign up with Facebook
            </Button>
            <Text justifyContent="center" align="center" as="label" size="2">Or</Text>
          </Flex>


          {/* Register Form */}
          <Flex direction="column" gap="2" mb="4">
            <Text as="label" size="2">Full Name</Text>
            <TextField.Root placeholder="Your name" />

            <Text as="label" size="2">Email</Text>
            <TextField.Root placeholder="you@example.com" />

            <Text as="label" size="2">Password</Text>
            <TextField.Root type="password" placeholder="Create a password" />
          </Flex>

          <Button size="3" style={{ width: '100%' }} mb="3">Register</Button>

          <Text size="2" align="center">
            Already have an account?{' '}
            <Text as="a" color="blue" href="/login" style={{ cursor: 'pointer' }}>
              Log in
            </Text>
          </Text>
        </Box>
      </Flex>
    </Theme>
  );
}

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig"; // adjust path

const handleGoogleSignUp = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Google user:", user);
    // You can store user in context or redirect here
  } catch (error) {
    console.error("Google Sign In Error:", error);
    alert("Failed to sign in with Google");
  }
};





export default RegisterPage;
