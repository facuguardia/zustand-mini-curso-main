import { WhiteCard } from "../../components";

type BearsProps = {
  title: string;
  counterBears: number;
  increment: (value: number) => void;
};

function Bears({ title, counterBears, increment }: BearsProps) {
  return (
    <WhiteCard centered>
      <h2>{title}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increment(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {counterBears}</span>
        <button onClick={() => increment(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
}

export default Bears;
