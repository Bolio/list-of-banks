import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListBanks from "./pages/ListBanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBanks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
