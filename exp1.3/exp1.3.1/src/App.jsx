import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ProductCard
        title="Wireless Headphones"
        price="129.99"
        inStock={true}
      />

      <ProductCard
        title="Mechanical Keyboard"
        price="89.99"
        inStock={false}
      />

      <ProductCard
        title="Smart Watch"
        price="199.99"
        inStock={true}
      />
    </div>
  );
}

export default App;
