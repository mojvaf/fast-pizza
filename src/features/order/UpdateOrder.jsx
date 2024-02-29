import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder(/*{/order }*/) {
  const fetcher = useFetcher();

  return (
    // Form is updating data without casing navigation
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
// data has changed based on this action
export async function action({ /*request ,*/ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
