import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/Page1/Page1detailA">Page1detailA</Link>
      <br />
      <Link to="/Page1/Page1detailB">Page1detailB</Link>
    </div>
  );
};
