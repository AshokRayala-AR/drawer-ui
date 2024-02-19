import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import "./index.css";
// import NavbarWrapper from "./components/NavbarWrapper";
// import Sidebar from "./components/Sidebar";
// import NavSideWrapper from "./components/NavSideWrapper";
import Inbox from "./pages/Inbox";
import Starred from "./pages/Starred";
import SendEmail from "./pages/SendEmail";
import Drafts from "./pages/Drafts";
import AllEMail from "./pages/AllEmail";
import Trash from "./pages/Trash";
import Spam from "./pages/Spam";
import Footer from "./components/Footer";

import NavbarWrapper from "./components/NavbarWrapper";
import Sidebar from "./components/Sidebar";

function App() {
  const [state, setState] = useState(false);
  function handleClick() {
    setState((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <NavbarWrapper
            state={state}
            handleClick={handleClick}
            setState={setState}
          />
          <Routes>
            <Route
              path="/"
              element={<Sidebar state={state} handleClick={handleClick} />}
            >
              <Route index element={<Inbox />} />
              <Route
                path="inbox"
                element={<Inbox state={state} handleClick={handleClick} />}
              />
              <Route
                path="starred"
                element={<Starred state={state} handleClick={handleClick} />}
              />
              <Route
                path="sendemail"
                element={<SendEmail state={state} handleClick={handleClick} />}
              />
              <Route
                path="drafts"
                element={<Drafts state={state} handleClick={handleClick} />}
              />
              <Route
                path="allemail"
                element={<AllEMail state={state} handleClick={handleClick} />}
              />
              <Route
                path="trash"
                element={<Trash state={state} handleClick={handleClick} />}
              />
              <Route
                path="spam"
                element={<Spam state={state} handleClick={handleClick} />}
              />
            </Route>
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
