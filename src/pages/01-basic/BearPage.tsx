import { useBearStore } from "../../stores";
import Bears from "../01-basic/Bears";

export const BearPage = () => {
  const { bears, incrementBears } = useBearStore((state) => state);

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Bears
          title="Osos Negros"
          counterBears={bears.black}
          increment={(value) => incrementBears("black", value)}
        />

        <Bears
          title="Osos Polares"
          counterBears={bears.polar}
          increment={(value) => incrementBears("polar", value)}
        />

        <Bears
          title="Osos Pandas"
          counterBears={bears.panda}
          increment={(value) => incrementBears("panda", value)}
        />
      </div>
    </>
  );
};
