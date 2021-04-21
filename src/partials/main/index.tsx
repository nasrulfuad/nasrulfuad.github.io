import avatar from "../../images/avatar.png";

interface Props {
  specialist: string;
  name: string;
}

export function Main({ specialist, name }: Props) {
  return (
    <div className="pt-20 pb-10">
      <h4 className="font-display text-4xl lg:text-5xl text-primary text-center tracking-wider select-none">
        {name}
      </h4>
      <small className="text-center block text-gray uppercase text-xs my-5">
        {specialist}
      </small>

      <div className="text-center w-full">
        <img className="block mx-auto w-36 md:w-72" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
