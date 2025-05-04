import "./style.css";

export const App = () => {
  return (
    <>
      <main className="main">
        <h1>Buty Count</h1>

        <h3 className="subtitle">Trata de llegar a 30</h3>

        <section className="count_container">
          <button className="rest_count">-</button>
          <p className="counter">0</p>
          <button className="add_count">+</button>
        </section>
      </main>
    </>
  );
};
