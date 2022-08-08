import { useParams } from "react-router-dom";

export const URLparameter = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>URLParameterページです</h1>
      <p>idは{id}です</p>
    </div>
  );
};
