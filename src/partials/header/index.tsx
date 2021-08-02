export function Header() {
  return (
    <div className="container mx-auto py-14 text-secondary font-semibold">
      <ul className="flex flex-row space-x-5 uppercase justify-center items-center text-xs">
        <li>
          <a className="navigation__item" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="navigation__item" href="#work">
            Works
          </a>
        </li>
        <li className="font-display lowercase text-6xl text-primary font-light">
          <a href="/">nf</a>
        </li>
        <li>
          <a className="navigation__item" href="#education">
            Educations
          </a>
        </li>
        <li>
          <a className="navigation__item" href="#skill">
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}
