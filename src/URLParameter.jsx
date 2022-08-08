import { useParams, useLocation } from "react-router-dom";

export const URLparameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>URLParameterページです</h1>
      <p>idは{id}です</p>
      <p>queryは{query.get("name")}です</p>
    </div>
  );
};
