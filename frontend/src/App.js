import { Routes, Route } from "react-router-dom";

import { DashLayout, Layout, Public } from "./components"; 
import { Login } from "./features";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>

        </Route>

      </Route>
    </Routes>
  );
}

export default App;
