import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { MyWork } from "../pages/my-work";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { ReLoop } from "../pages/reloop";
import { ReLoopDeveloperPage } from "../pages/reloop_developer_page";
import { Enb } from "../pages/enb";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/portfolio" element={<MyWork />} />
        <Route path="/reloop" element={<ReLoop />} />
        <Route path="/reloop_developer_page" element={<ReLoopDeveloperPage />} />
        <Route path="/enb" element={<Enb />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
