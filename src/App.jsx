import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Toodo from "./Todo/Todo";
import Home from "./shop/Home";
import Cart from "./shop/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="todo" element={<Toodo />} />
          <Route path="shop" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
