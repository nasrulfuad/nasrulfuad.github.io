import { SkillInfo, Title, Wave } from "../../components";

const skills = [
  {
    category: "Web Technologies",
    items: "GraphQL / Git / Docker / Microservices",
  },
  {
    category: "Frameworks & Libraries",
    items: "Laravel / NestJS / ReactJS",
  },
  {
    category: "Databases",
    items: "MySQL / PostgreSQL / MongoDB",
  },
  {
    category: "Programming Languages",
    items: "Typescript / Javascript / PHP",
  },
  {
    category: "Others",
    items: "Redis / NodeJS / Websocket",
  },
];

export function Skill() {
  return (
    <section id="skill">
      <Title title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
        {skills.map((skill, index) => (
          <SkillInfo {...skill} key={index} />
        ))}
      </div>

      <Wave />
    </section>
  );
}
