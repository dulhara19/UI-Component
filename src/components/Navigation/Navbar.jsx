// // src/components/Navbar.jsx
// import { Flex, Box, Text, Avatar, IconButton, Badge } from '@radix-ui/themes';
// import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const cartItemCount = 3; // You can fetch this from context or state

//   return (
//     <Box as="header" py="3" px="5" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
//       <Flex align="center" justify="between">
        
//         {/* Logo */}
//         <Text size="5" weight="bold">
//           <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
//             Giftify
//           </Link>
//         </Text>

//         {/* Menu */}
//         <Flex gap="4">
//           <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
//           <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link>
//           <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
//         </Flex>

//         {/* Icons */}
//         <Flex align="center" gap="3">
//           {/* Cart with badge */}
//           <Badge content={cartItemCount} color="red" size="1" variant="solid">
//             <IconButton variant="ghost" color="gray">
//               <FaShoppingCart size={20} />
//             </IconButton>
//           </Badge>

//           {/* Profile Icon */}
//           <Link to="/profile">
//             <IconButton variant="ghost" color="gray">
//               <FaUserCircle size={22} />
//             </IconButton>
//           </Link>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Flex, Box, Text, IconButton, Badge, Popover } from '@radix-ui/themes';
import { FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = 2; // Replace with actual cart state later

  const menuLinks = (
    <Flex direction={{ initial: 'column', sm: 'row' }} gap="4">
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
      <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
    </Flex>
  );

  return (
    <Box as="nav" px="4" py="3" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', background: 'white' }}>
      <Flex justify="between" align="center">
        {/* Logo */}
        <Text size="5" weight="bold">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>🎁 Giftify</Link>
        </Text>

        {/* Desktop menu */}
        <Box display={{ initial: 'none', sm: 'block' }}>
          {menuLinks}
        </Box>

        {/* Right side icons */}
        <Flex align="center" gap="3">
          <Badge content={cartItemCount} size="1" color="red">
            <IconButton variant="ghost" color="gray">
              <FaShoppingCart size={20} />
            </IconButton>
          </Badge>

          <Link to="/profile">
            <IconButton variant="ghost" color="gray">
              <FaUserCircle size={22} />
            </IconButton>
          </Link>

          {/* Mobile menu toggle */}
          <Box display={{ sm: 'none' }}>
            <Popover.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Popover.Trigger>
                <IconButton variant="ghost">
                  <FaBars />
                </IconButton>
              </Popover.Trigger>
              <Popover.Content sideOffset={5} style={{ padding: '10px' }}>
                {menuLinks}
              </Popover.Content>
            </Popover.Root>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
