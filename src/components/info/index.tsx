interface Props {
  margin: number;
  year: string;
  place: string;
  position: string;
}

export function Info({ margin, place, year, position }: Props) {
  return (
    <div className={`my-${margin}`}>
      <small className="text-xs text-gray">{year}</small>
      <h4 className="font-bold my-2">{place}</h4>
      <p className="text-sm text-secondary">{position}</p>
    </div>
  );
}
