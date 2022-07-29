import React, {useState} from "react"; 
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {

    const [products, setProducts] = useState(jsonData);

  
        return (
            <>
          <h1>IronStore</h1>
          <table>
          <tr>
                <th>Name</th>
                <th>Price</th>    
            </tr>
           <ProductTable products={products} />
          </table>
         
         
          </>
        )

}