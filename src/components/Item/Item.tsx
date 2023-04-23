import { CartItemType } from '../../App';
import { Wrapper } from './Item.styles';
import Button from '@mui/material/Button';

type Props = {
  item: CartItemType;
  handleAddToCart(cartItem: CartItemType): void;
};

const Item = ({ handleAddToCart, item }: Props) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={handleAddToCart.bind(null, item)}>Add to Cart</Button>
    </Wrapper>
  );
};
export default Item;
