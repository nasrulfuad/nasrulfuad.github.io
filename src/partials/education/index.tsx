import { Info, Title, Wave } from "../../components";

const infos = [
  {
    year: "2007 - 2012",
    place: "SD Negeri Balunglor 06",
    position: "",
    margin: 2,
  },
  {
    year: "2013 - 2015",
    place: "SMP Negeri 02 Balung",
    position: "",
    margin: 2,
  },
  {
    year: "2016 - 2018",
    place: "SMK Teknologi Balung",
    position: "Software Engineering",
    margin: 2,
  },
  {
    year: "2018 - 2022",
    place: "QODR (Quality Muslim Coder)",
    position: "Web Developer",
    margin: 2,
  },
];

export function Education() {
  return (
    <section id="education">
      <Title title="education" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
        {infos.map((info, index) => (
          <Info {...info} key={index} />
        ))}
      </div>

      <Wave />
    </section>
  );
}
