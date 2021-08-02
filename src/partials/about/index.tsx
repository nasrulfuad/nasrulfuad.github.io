import { calculateAge } from "../../utils/calculateAge";

export function About() {
  return (
    <section id="about">
      <div className="text-md md:text-lg leading-7 text-secondary subpixel-antialiased tracking-wider font-sans">
        <p>
          <span className="font-display text-4xl select-none">hi</span>, I’m
          Nasrul from Indonesia, software engineer with{" "}
          {calculateAge(new Date(2018, 1, 8))} years of experiences in
          developing user interfaces, debugging and building a web applications
          incorporating a range of technologies and experienced as a mentor web
          developer at{" "}
          <a
            className="text-primary font-bold"
            target="_blank"
            href="https://qodr.or.id"
            rel="noreferrer noopener"
          >
            qodr.or.id
          </a>
        </p>
        <br />
        <p>
          Offering strong expertise in multiple programming languages, including
          HTML, CSS, Typescript and PHP.
        </p>
        <br />
        <p>Seeking to secure a challenging position as a software engineer.</p>
      </div>
    </section>
  );
}
