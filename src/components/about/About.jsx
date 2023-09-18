import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";

function About() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setProducts(response.data);
                console.log(response.data)
            } catch (error) {
                console.error();
            }
        };
        getProducts();
    }, []);

    return (
        <ProductsApi>
           <div className="setproducts-api">
               {products.map((el) => (
                   <div key={el.id}>
                       <div>
                           <div className="products-api">
                               <h2>{el.name}</h2>
                               <h3>{el.username}</h3>
                               <h4>{el.email}</h4>
                               <p>{el.address.city}</p>
                           </div>
                       </div>
                   </div>
               ))}
           </div>
        </ProductsApi>
    );
}

export default About;

const ProductsApi = styled.div`
  .setproducts-api {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .products-api {
    width: 350px;
    height: 300px;
    background: #434556;
    border: 2px solid #434556;
    padding: 20px 20px;
    margin: 20px 20px;
    border-radius: 20px;
  }
  
  .products-api h2 {
    color: #ffff;
    font-size: 22px;
  }

  .products-api h3 {
    color: #ffff;
    font-size: 25px;
    padding: 20px 0;
  }

  .products-api h4 {
    color: #ffff;
    font-size: 25px;
    padding: 20px 10px;
  }

  .products-api p {
    color: #ffff;
    font-size: 25px;
    padding: 20px 10px;
  }
`
