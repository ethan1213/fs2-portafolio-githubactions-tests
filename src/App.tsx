import { Route, Router, Switch } from "wouter";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Menu from "./components/menu/Menu";
import Section from "./components/section/Section";

// "/fs2-portafolio-githubactions-tests" en build (Pages), "" en dev
const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

const App = () => (
  <Router base={base}>
    <Menu />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/proyectos" component={Projects} />
      <Route path="/sobre-mi" component={About} />
      <Route path="/contacto" component={Contact} />
      <Route>
        <Section title="404" subtitle="Esta página no existe." />
      </Route>
    </Switch>
  </Router>
);

export default App;
