import { Count } from "./Count";
import "./style.css";

export const App = () => {
  return (
    <>
      <main className="main">
        <h1>Buty Count</h1>

        <h3 className="subtitle">Trata de llegar a 30</h3>

        <Count></Count>
      </main>
    </>
  );
};
