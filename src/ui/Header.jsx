import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

export const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-[0.5rem]">
        Fast React co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};
