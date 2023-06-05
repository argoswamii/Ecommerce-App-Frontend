import "./App.css";
import Homemaster from "./component/Home/Homemaster";
import Productmaster from "./component/Product/Productmaster";
import Payment from "./component/Payment/Pay";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homemaster />} />
        <Route path="/products" element={<Productmaster />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
