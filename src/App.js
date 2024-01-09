import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import the all Components here
import {Layout} from "./components"

// Import all Pages here
import {
  Payouts,
  Orders,
  Home,
  Products,
  Delivery,
  Marketing,
  Analytics,
  Discounts,
  Audience,
  Appearence,
  Plugins,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="contact" element={<h1>Contact</h1>} /> */}
          {/* <Route path="payouts" element={<Payouts />} /> */}

          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="audience" element={<Audience />} />
          <Route path="appearance" element={<Appearence />} />
          <Route path="plugins" element={<Plugins />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
