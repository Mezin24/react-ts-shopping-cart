import { Wrapper } from './Cart.styles';
import { CartItemType } from '../../App';
import CartItem from './CartItem';

type Props = {
  cartItems: CartItemType[];
  addToCart(clickedItem: CartItemType): void;
  removeFromCart(id: number): void;
};

const Cart = ({ addToCart, cartItems, removeFromCart }: Props) => {
  const calcTotal = (items: CartItemType[]) => {
    return items.reduce((ack: number, cur) => ack + cur.amount * cur.price, 0);
  };
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>No items in cart</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calcTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
export default Cart;
