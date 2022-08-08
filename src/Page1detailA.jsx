import { useLocation } from "react-router-dom";

export const Page1detailA = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Page1detailAページです</h1>
    </div>
  );
};
