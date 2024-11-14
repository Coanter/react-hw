import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    price: 100,
    category: "Category 1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVTcHa4jezwfnSDZNrcPUzeALWP4WyYZV4g&s"
  },
  {
    id: 1,
    name: "Product 2",
    price: 100,
    category: "Category 1",
    image: ""
  }
]

function App() {
  return (
    <div>
      {
        products.map((product) => (
          <ProductCard data = {product} />
        ))
      }
    </div>
  )
}

export default App;
