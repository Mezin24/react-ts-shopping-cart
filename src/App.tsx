import * as React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer, Grid, Badge, LinearProgress } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// styles
import { Wrapper, StyledButton } from './App.styles';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
// Types
export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, cur: CartItemType) => acc + cur.amount, 0);

  const handleAddToCart = (cartItem: CartItemType) => {
    setCartItems((prev) => {
      const existingCartItem = prev.find((item) => item.id === cartItem.id);

      if (existingCartItem) {
        return prev.map((item) =>
          item.id === cartItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prev, { ...cartItem, amount: 1 }];
      }
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        ></Cart>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid key={product.id} item xs={12} sm={4}>
            <Item item={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default App;
