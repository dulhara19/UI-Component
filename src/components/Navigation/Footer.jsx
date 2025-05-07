import React from 'react';
import { Box, Flex, Text, Link, Separator } from '@radix-ui/themes';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" py="5" px="4" style={{ backgroundColor: '#f9f9f9' }}>
      <Separator size="4" mb="4" />

      <Flex direction="column" align="center" gap="3">
        <Text size="4" weight="bold" color="gray">
          🎁 StarGift Shop
        </Text>

        <Flex gap="4" wrap="wrap" justify="center">
          <Link href="/about" size="2" color="gray">About Us</Link>
          <Link href="/contact" size="2" color="gray">Contact</Link>
          <Link href="/privacy" size="2" color="gray">Privacy Policy</Link>
          <Link href="/terms" size="2" color="gray">Terms of Service</Link>
        </Flex>

        <Flex gap="3" mt="3">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF size={18} color="#4267B2" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram size={18} color="#E1306C" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter size={18} color="#1DA1F2" />
          </Link>
          <Link href="mailto:info@stargiftshop.com" aria-label="Email">
            <FaEnvelope size={18} color="#888" />
          </Link>
        </Flex>

        <Text size="1" color="gray" mt="2">
          © {new Date().getFullYear()} StarGift Shop. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
