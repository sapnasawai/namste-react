import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
  return (
    <>
      <h1>OOOPS......!</h1>
      <h2>Something went wrong</h2>
      <h2>
        {err.status} {err.error.message}
      </h2>
    </>
  );
};
export default Error;
