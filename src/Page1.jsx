import { Link } from "react-router-dom";

export const Page1 = () => {
  const Arr = [...Array(100).keys()];
  console.log(Arr);
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/Page1/Page1detailA", state: Arr }}>
        Page1detailA
      </Link>
      <br />
      <Link to="/Page1/Page1detailB">Page1detailB</Link>
    </div>
  );
};
