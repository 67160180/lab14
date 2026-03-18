import { Link, NavLink } from "react-router-dom";
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
     const { cartItems } = useCart();
  return (
    <nav
      style={{
        backgroundColor: "#0066cc",
        padding: "15px 20px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        🏠 MyApp
      </Link>

      <div style={{ display: "flex", gap: "15px", marginLeft: "auto" }}>
        {/* NavLink เพิ่ม active class อัตโนมัติ */}
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >
          About
        </NavLink>
        
         <NavLink
         to ="/products" 
         style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
        >  
        Products
        </NavLink>

         <NavLink to="/cart" 
         style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid white" : "none",
})}>
        🛒 Cart {cartItems.length > 0 && (
          <span style={{
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '12px',
          }}>
            {cartItems.length}
          </span>
        )}
      </NavLink>
      </div>
    </nav>
  );
}

