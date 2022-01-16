import {useState,useEffect} from 'react'
import styled from 'styled-components'
import {popularProducts} from "../data"
import Product from './Product'
import axios from 'axios'
const Container=styled.div `
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    margin-top:150px;
    
`

const Products = ({cat,filters,sort}) => {
    // console.log(cat,filters,sort)
    const [Products,setProducts]=useState([]);
    const [filteredProducts,setFilteredProducts]=useState([]);
    //whenever category changes run this
    useEffect(() => {
        const getProducts=async ()=>{
            try{
                const res=await axios.get( cat 
                ? `http://localhost:8080/api/products?category=${cat}`
                : "http://localhost:8080/api/products" 
             );
             setProducts(res.data)
             console.log(res.data)
            }catch(err){
                console.log(err)
            }
        

        }
        getProducts()
    },[cat])

    useEffect(()=>{
        cat && setFilteredProducts(
            Products.filter(item=>Object.entries(filters).every(([key,value])=>
                item[key].includes(value)
            ))
        )
    },[Products,cat,filters])

    useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);
    


    console.log(filteredProducts)
    return (
        <Container>
        {
            cat?filteredProducts.map((item)=>{
                return <Product item={item} key={item.id}/>
            }):Products.map((item)=>{
                return <Product item={item} key={item.id}/>
            })
        }
        </Container>
    )
}

export default Products
