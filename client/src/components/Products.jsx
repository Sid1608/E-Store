import styled from 'styled-components'
import {popularProducts} from "../data"
import Product from './Product'
const Container=styled.div `
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    margin-top:150px;
    
`

const Products = () => {
    return (
        <Container>
        {
            popularProducts.map((item)=>{
                return <Product item={item} key={item.id}/>
            })
        }
        </Container>
    )
}

export default Products
