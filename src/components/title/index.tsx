export function Title({ title }: { title: string }) {
  return (
    <h1 className="font-display text-5xl lg:text-6xl text-primary text-center mb-10 mt-20 select-none">
      {title}
    </h1>
  );
}
