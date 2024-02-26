import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import PageLayout from "./components/page/PageLayout";
import Components from "./components/page/Components";
import Hooks from "./components/page/Hooks";
import Utils from "./components/page/Utils";
import Blog from "./components/page/Blog";
import Tools from "./components/page/Tools";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} exact />
              <Route element={<PageLayout />}>
                <Route path="/components" element={<Components />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/utils" element={<Utils />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/tools" element={<Tools />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
