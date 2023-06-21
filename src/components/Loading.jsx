import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = ({ children, loading, error }) => {
  const loadMessage = "Loading please wait !!";
  return (
    <>
      {loading ? (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <i> {loadMessage}</i>
        </>
      ) : error ? (
        <i> "{error}"</i>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
