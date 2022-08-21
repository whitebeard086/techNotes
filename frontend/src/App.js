import { Routes, Route } from "react-router-dom";

import { DashLayout, Layout, Public } from "./components";
import { Login, NotesList, UsersList, Welcome } from "./features";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          
          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
