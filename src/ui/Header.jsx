import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export const Header = () => {
  return (
    <header>
      <Link to="/">Fast React co.</Link>
      <SearchOrder />
      <p>Mojg</p>
    </header>
  );
};
