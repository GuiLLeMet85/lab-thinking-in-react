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
            
    const handleStock = (e) => {
        if (e.target.checked === true) {
        const filtered = products.filter(elem => elem.inStock);
        setProducts(filtered);
        } else {
            setProducts(jsonData);
        }

    }
        return (
            <>
          <h1>IronStore</h1>
                <p className="search-title">Search</p>   
                <SearchBar onSearch={handleSearch}/>
                <div className="checksearch">
                <input type="checkbox" onChange={handleStock} /> <p>Only show products in stock</p> 
                </div>

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