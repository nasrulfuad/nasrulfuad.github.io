import { Info, InfoProps, Wave } from "../../components";
import { Title } from "../../components/title";

const infos: InfoProps[] = [
  {
    year: "August 2018 - March 2021",
    place: "QODR (qodr.or.id)",
    position: "Software Engineer",
    margin: 6,
    tasks: [
      "Develope a web app registration member at qodr",
      "Used Laravel, ReactJS, Antd Design and MySQL",
      "IT Div Lead",
      "Mentoring new member",
      "and a lot of experiences i’ve got being a member",
    ],
  },
  {
    year: "February 2019 - April 2019",
    place: "Dlingo Digital Valley",
    position: "Frontend Developer",
    margin: 6,
    tasks: [
      "Develope an interface web app",
      "Work with JQuery, bootstrap and etc.",
      "Work with team",
    ],
  },
  {
    year: "August 2019",
    place: "Digital Talent Scholarship",
    position: "Web Developer",
    margin: 6,
    tasks: [
      "Develope a simple web app with NodeJS",
      "Work with Javascript, bootstrap and etc.",
      "Used mysql database",
    ],
  },
  {
    year: "February 2020 - Desember 2020",
    place: "PT. Bintang Trans Khatulistiwa",
    position: "Web Developer",
    margin: 6,
    tasks: [
      "Maintenance an eccomerce web app",
      "Work with Laravel, livewire, bootstrap and etc.",
      "Work with team",
      "Remote",
    ],
  },
  {
    year: "June 2021 - Present",
    place: "PT. Qodrbee Berinovasi",
    position: "Software Engineer",
    margin: 6,
    tasks: [
      "Used NestJS framework",
      "Built an ecommerce webapp with auction-bid system",
      "Developed a realtime bid using socket io",
      "Created a queue job that take too long process to perform during a typical web request using bullJS",
      "Implemented a Service Layer, Observable and another design patterns",
      "Created an upload file service to the cloud (cloudinary)",
      "Created a send email notification service",
      "Worked with DOCKER for the development",
      "Used POSTGRES database and PRISMA for the ORM",
      "Designed the database",
      "Develope a BOT Telegram",
    ],
  },
];

export function Work() {
  return (
    <section id="work">
      <Title title="Career Experiences" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
        {infos.map((info, index) => (
          <Info {...info} key={index} />
        ))}
      </div>
      <Wave />
    </section>
  );
}
