import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-2 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="s text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
