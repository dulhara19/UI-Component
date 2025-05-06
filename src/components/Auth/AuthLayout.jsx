// src/components/layouts/AuthLayout.jsx
import { Theme, Flex, Box } from '@radix-ui/themes';

const AuthLayout = ({ children }) => {
  return (
    <Theme>
      <Flex align="center" justify="center" height="100vh" p="4" style={{ backgroundColor: '#f5f5f5' }}>
        <Box
          width="350px"
          p="4"
          style={{
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            borderRadius: '12px',
          }}
        >
          {children}
        </Box>
      </Flex>
    </Theme>
  );
};

export default AuthLayout;
