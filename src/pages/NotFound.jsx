import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404 - ไม่พบหน้านี้</h1>
      <p>หน้าที่คุณต้องการไม่มีอยู่</p>
      <Link to="/">กลับหน้าหลัก</Link>
    </div>
  );
}