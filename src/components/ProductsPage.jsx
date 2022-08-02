import React, {useState} from "react"; 
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {

    const [products, setProducts] = useState(jsonData);

    const handleSearch = (searchValue) => {
        if (searchValue === '') {
            setProducts(jsonData);
        }   else {
        const filtered = products.filter(elem =>elem.name.toLowerCase().includes((searchValue).toLowerCase()));
            setProducts(filtered);
        }
    } 
    
    const handelInStock = (e) => {
        let isInStock = e.target.value;
        if (isInStock) {
            const filterByInStock = products.filter(elem=>elem.inStock);
            setProducts(filterByInStock);
        }
        else {
            setProducts(jsonData)
        }
    }
        return (
            <>
          <h1>IronStore</h1>
                 <p className="search-title">Search</p>   
                <SearchBar onSearch={handleSearch}/>
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