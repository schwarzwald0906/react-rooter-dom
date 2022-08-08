import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const Arr = [...Array(100).keys()];
  console.log(Arr);
  const history = useHistory();
  const ButtonPage1detailA = () => history.push("/Page1/Page1detailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/Page1/Page1detailA", state: Arr }}>
        Page1detailA
      </Link>
      <br />
      <Link to="/Page1/Page1detailB">Page1detailB</Link>
      <br />
      <button onClick={ButtonPage1detailA}>Page1detailA</button>
    </div>
  );
};
