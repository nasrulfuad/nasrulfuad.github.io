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
      <div className="bg-white px-5 pb-16 sm:px-10 h-full py-26 md:px-24 lg:px-20 xl:px-24 2xl:px-36">
        <Main specialist="Web Developer" name="Nasrul Fuad" />
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
