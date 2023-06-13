import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://cdn.shopify.com/s/files/1/0267/2315/6143/products/s7.3024883-400_DEFAULT.png?v=1678709991&width=640&height=800&crop=center",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$10",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJ2LoD9GuxpyuMZlohX-eOuUlH62s1CO7whPJ9XVGKtDYbzARpzcSc4qatwDxBJ1kXoEin3E6cGwmZDPw9MekaK7Q4LKtFbmBhIVglUQLmPHLbeC0Z9GDlAQ&usqp=CAE",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
