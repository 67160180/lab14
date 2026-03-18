import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>🛒 ตะกร้าสินค้า</h1>
        <p>ยังไม่มีสินค้าในตะกร้า</p>
        <Link to="/products">เลือกซื้อสินค้า</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1>🛒 ตะกร้าสินค้า ({cartItems.length} รายการ)</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            borderBottom: "1px solid #eee",
          }}
        >
          <span>{item.name}</span>
          <span>฿{item.price.toLocaleString()}</span>
          <button onClick={() => removeFromCart(item.id)}>ลบ ✕</button>
        </div>
      ))}

      <div style={{ marginTop: "20px", textAlign: "right", fontSize: "20px" }}>
        <strong>รวม: ฿{total.toLocaleString()}</strong>
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "15px 40px",
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "18px",
          width: "100%",
        }}
      >
        สั่งซื้อ
      </button>
    </div>
  );
}