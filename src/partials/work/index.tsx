import { Info, Wave } from "../../components";
import { Title } from "../../components/title";

const infos = [
  {
    year: "February 2019 - April 2019",
    place: "Dlingo Digital Valley",
    position: "Frontend Developer",
    margin: 6,
  },
  {
    year: "August 2019",
    place: "Digital Talent Scholarship",
    position: "Web Developer",
    margin: 6,
  },
  {
    year: "February 2020 - Desember 2020",
    place: "PT. Bintang Trans Khatulistiwa",
    position: "Web Developer",
    margin: 6,
  },
];

export function Work() {
  return (
    <section id="work">
      <Title title="career experience" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
        {infos.map((info, index) => (
          <Info {...info} key={index} />
        ))}
      </div>
      <Wave />
    </section>
  );
}
