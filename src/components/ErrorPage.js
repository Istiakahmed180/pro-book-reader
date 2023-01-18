import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";

const ErrorPage = () => {
  let error = useRouteError();

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <p className="text-xl font-semibold text-red-500 my-4">
          {error.statusText}
        </p>
        <p className="text-xl font-semibold text-red-500">{error.data}</p>
      </div>
    </>
  );
};

export default ErrorPage;
