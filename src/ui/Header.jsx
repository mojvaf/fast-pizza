import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

export const Header = () => {
  return (
    <header
      className="flex items-center justify-around border-b-4 border-stone-200
     bg-yellow-500 px-4 py-3 uppercase sm:px-6"
    >
      <Link to="/" className="tracking-[0.5rem]">
        Fast React co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};
