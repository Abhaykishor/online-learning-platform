
import React from 'react';
import { Product } from "./Product";

export const Products = ({ data }) => {
  return (
    <>
      {data.map((course) => (
        <Product key={course._id} data={course} />
      ))}
    </>
  );
};