import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

export function Layout() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
