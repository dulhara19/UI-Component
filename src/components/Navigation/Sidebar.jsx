import React from 'react';
import { Box, Text, Flex, Separator, Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { FaTh, FaUsers, FaTags, FaBoxOpen } from 'react-icons/fa';

const Sidebar = ({ isAdmin = false }) => {
  const adminLinks = [
    { name: 'Dashboard', icon: <FaTh />, path: '/admin/dashboard' },
    { name: 'Products', icon: <FaBoxOpen />, path: '/admin/products' },
    { name: 'Categories', icon: <FaTags />, path: '/admin/categories' },
    { name: 'Users', icon: <FaUsers />, path: '/admin/users' },
  ];

  const filterLinks = [
    { name: 'All', path: '/shop' },
    { name: 'Birthday', path: '/shop/birthday' },
    { name: 'Anniversary', path: '/shop/anniversary' },
    { name: 'Personalized', path: '/shop/personalized' },
  ];

  const linksToRender = isAdmin ? adminLinks : filterLinks;

  return (
    <Box
      style={{
        minWidth: 200,
        maxWidth: 250,
        padding: '1rem',
        borderRight: '1px solid #eee',
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
      }}
    >
      <Text size="4" weight="bold" mb="4">
        {isAdmin ? 'Admin Panel' : 'Filters'}
      </Text>

      <Separator my="2" />

      <Flex direction="column" gap="3">
        {linksToRender.map((link, index) => (
          <Link key={index} to={link.path} style={{ textDecoration: 'none' }}>
            <Button variant="ghost" size="2" color="gray" style={{ justifyContent: 'start', gap: 10 }}>
              {link.icon && link.icon}
              {link.name}
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
