import React from 'react';
import GiftCard from './GiftCard';
import { Grid } from '@radix-ui/themes';
// Adjust the import path as necessary

const GiftGrid = ({ gifts, onAddToCart }) => {
  return (
    <Grid
      columns={{ initial: '1', sm: '2', md: '3', lg: '4' }}
      gap="4"
      width="auto"
      justify="center"
      style={{ padding: '20px' }}
      boarder ="100px solid #ccc"
    >

      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} onAddToCart={onAddToCart} />
      ))}
    </Grid>
  );
};

export default GiftGrid;
