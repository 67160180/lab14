import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 35000, category: "Electronics" },
  { id: 2, name: "Phone", price: 15000, category: "Electronics" },
  { id: 3, name: "Shirt", price: 500, category: "Clothing" },
  { id: 4, name: "Pants", price: 800, category: "Clothing" },
];

export default function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ สินค้าทั้งหมด</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              width: "200px",
            }}
          >
            <h3>{product.name}</h3>
            <p>฿{product.price.toLocaleString()}</p>
            {/* Link ไปหน้ารายละเอียด */}
            <Link to={`/products/${product.id}`}>ดูรายละเอียด →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}