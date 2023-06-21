import React from "react";

import Products from "../components/Products";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import {  Container  } from "react-bootstrap";
import Header from "../components/Header";
import SearchInput from "../components/Search";

const Index = () => {
  const { loading, error } = useSelector((state) => state.productsSlice);
  return (
    <>
      <Header>
        <SearchInput />
      </Header>
      <Container>
        <h1 className="pageTitle">Products Page</h1>
        <Loading loading={loading} error={error}>
          <Products />
        </Loading>
      </Container>
    </>
  );
};

export default Index;
