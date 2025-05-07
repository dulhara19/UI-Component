import React from 'react';
import { Box, Flex, Card, Text, Heading, Avatar, Separator } from '@radix-ui/themes';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Emily Watson',
    avatar: 'https://i.pravatar.cc/100?img=12',
    quote: 'Absolutely loved the packaging and the quality. My friend was so happy!',
    role: 'Regular Customer',
  },
  {
    name: 'Jason Lee',
    avatar: 'https://i.pravatar.cc/100?img=32',
    quote: 'Fast delivery and amazing gift variety. Highly recommended!',
    role: 'Gift Lover',
  },
  {
    name: 'Sarah Parker',
    avatar: 'https://i.pravatar.cc/100?img=24',
    quote: 'Ordered a custom hamper for my parents, and they were overjoyed!',
    role: 'Happy Buyer',
  },
];

const Testimonials = () => {
  return (
    <Box py="6" px="4" id="testimonials">
      <Heading size="5" align="center" weight="bold" mb="3">
        ❤️ What Our Customers Say
      </Heading>
      <Text align="center" size="3" color="gray" mb="4">
        Genuine words from people who’ve trusted us to deliver love and joy.
      </Text>
      <Separator size="4" my="4" />

      <Flex wrap="wrap" gap="4" justify="center">
        {testimonials.map((t, index) => (
          <Card
            key={index}
            style={{
              width: 280,
              padding: '1.5rem',
              borderRadius: '16px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Flex direction="column" gap="3" align="center">
              <FaQuoteLeft size={20} color="#FF6B6B" />
              <Text align="center" style={{ fontStyle: 'italic' }}>
                “{t.quote}”
              </Text>
              <Avatar
                src={t.avatar}
                fallback={t.name[0]}
                size="3"
                radius="full"
              />
              <Text size="2" weight="medium">
                {t.name}
              </Text>
              <Text size="1" color="gray">
                {t.role}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
