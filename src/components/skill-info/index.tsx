interface Props {
  category: string;
  items: string;
}

export function SkillInfo({ category, items }: Props) {
  return (
    <div className="my-3">
      <p className="text-sm text-gray mb-2">{category}</p>
      <p>{items}</p>
    </div>
  );
}
