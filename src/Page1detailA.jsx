import { useLocation, useHistory } from "react-router-dom";

export const Page1detailA = () => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1detailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
