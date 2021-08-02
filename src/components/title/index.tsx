export function Title({ title }: { title: string }) {
  return (
    <h1 className="font-display text-4xl lg:text-5xl text-primary text-center mb-10 mt-20 pt-10 select-none">
      {title}
    </h1>
  );
}
