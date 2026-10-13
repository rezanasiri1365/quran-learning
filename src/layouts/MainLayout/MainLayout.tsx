import { Link, Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
return (
    <div className="app-layout" dir="rtl" >
              <header className="main-header">
                        <div className="header-container">
                              <Link to="/" className="logo"> آموزش قرآن</Link>
           <nav className="main-nav">

            <Link to="/">
              خانه
            </Link>

            <Link to="/courses">
              دوره‌های آموزشی
            </Link>

            <Link to="/about">
              درباره ما
            </Link>

            <Link to="/contact">
              تماس با ما
            </Link>

          </nav>

          <Link to="/login" className="login-link">
            ورود
          </Link>
                        </div>
              </header>
              <main className="main-content">

        <Outlet />
         
      </main>
      <footer className="main-footer">
                   <p>
          © 2026 سامانه آموزش قرآن
        </p>    

         </footer>
    </div>

);
}

export default MainLayout;