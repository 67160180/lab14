import { useCart } from "../contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 35000,
    category: "Electronics",
    description: "โน้ตบุ๊กประสิทธิภาพสูง",
  },
  {
    id: 2,
    name: "Phone",
    price: 15000,
    category: "Electronics",
    description: "สมาร์ทโฟนรุ่นล่าสุด",
  },
  {
    id: 3,
    name: "Shirt",
    price: 500,
    category: "Clothing",
    description: "เสื้อผ้าคุณภาพดี",
  },
  {
    id: 4,
    name: "Pants",
    price: 800,
    category: "Clothing",
    description: "กางเกงใส่สบาย",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const inCart = cartItems.some((item) => item.id === product?.id);

  if (!product) {
    return (
      <div style={{ padding: "40px" }}>
        <p>ไม่พบสินค้า</p>
        <Link to="/products">กลับ</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      {/* ... รายละเอียดสินค้า ... */}

      <button
        onClick={() => addToCart(product)}
        disabled={inCart}
        style={{
          padding: "12px 30px",
          backgroundColor: inCart ? "#ccc" : "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: inCart ? "not-allowed" : "pointer",
        }}
      >
        {inCart ? "✅ อยู่ในตะกร้าแล้ว" : "🛒 เพิ่มลงตะกร้า"}
      </button>
    </div>
  );
}