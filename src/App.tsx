import { Fragment } from "react";
import {
  Education,
  Work,
  About,
  Header,
  Main,
  Outro,
  Skill,
  Footer,
} from "./partials";

export function App() {
  return (
    <Fragment>
      <Header />
      <div className="px-5 pb-16 sm:px-10 h-full py-26 md:px-24 lg:px-20 xl:px-24 2xl:px-36 half__background">
        <Main specialist="Software Engineer" name="nasrul fuad" />
        <About />
        <Work />
        <Education />
        <Skill />
        <Outro />
        <Footer />
      </div>
    </Fragment>
  );
}
