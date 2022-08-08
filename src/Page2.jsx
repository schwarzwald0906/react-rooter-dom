import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/Page2/999">URLParameter</Link>
      <br />
      <Link to="/Page2/999?name=hogehoge">QueryParameter</Link>
    </div>
  );
};
