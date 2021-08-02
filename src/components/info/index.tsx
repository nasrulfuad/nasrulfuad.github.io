export interface InfoProps {
  margin: number;
  year: string;
  place: string;
  position: string;
  tasks?: string[];
}

export function Info({ margin, place, year, position, tasks }: InfoProps) {
  return (
    <div className={`my-${margin}`}>
      <small className="text-xs text-gray">{year}</small>
      <h4 className="font-bold my-1">{place}</h4>
      <p className="text-sm text-secondary mb-3">{position}</p>
      {tasks && (
        <ul className="list-disc pl-4 text-base md:text-sm lg:text-base text-secondary">
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
