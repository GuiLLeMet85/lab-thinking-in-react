import "./App.css";
import ProductPage from '../components/ProductsPage'
import SearchBar from '/../components/SearchBar'
import ProductTable from "../components/ProductTable";


function App() {
  return 
      <div className="App">
        <ProductPage />
        <SearchBar />
        <ProductTable />
      </div>;
}


export default App;
