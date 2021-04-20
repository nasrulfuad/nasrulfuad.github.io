import { SkillInfo, Title, Wave } from "../../components";

const skills = [
  {
    category: "Web Technology",
    items: "GraphQL / Git / Docker / Redis / Microservices",
  },
  {
    category: "Framework / Library",
    items: "Laravel / ExpressJS / NestJS / ReactJS",
  },
  {
    category: "Database",
    items: "MySQL / SQLite / MongoDB",
  },
  {
    category: "Programming Language",
    items: "Typescript / Javascript / PHP",
  },
];

export function Skill() {
  return (
    <section id="skill">
      <Title title="skill" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
        {skills.map((skill, index) => (
          <SkillInfo {...skill} key={index} />
        ))}
      </div>

      <Wave />
    </section>
  );
}
