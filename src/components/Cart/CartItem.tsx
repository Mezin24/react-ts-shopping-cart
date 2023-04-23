import Button from '@mui/material/Button';
import { CartItemType } from '../../App';
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart(item: CartItemType): void;
  removeFromCart(id: number): void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
  const { amount, id, image, price, title } = item;
  return (
    <Wrapper>
      <div>
        <h3>{title}</h3>
        <div className='information'>
          <p>Price: ${price}</p>
          <p>Total: ${(amount * price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={removeFromCart.bind(null, id)}
          >
            -
          </Button>
          <p>{amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={addToCart.bind(null, item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={image} alt={title} />
    </Wrapper>
  );
};
export default CartItem;
