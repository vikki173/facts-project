import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/facts`)
      .then((res) => res.json())
      .then((data) => {
        setFacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching facts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fun Facts</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {facts.map((fact) => (
            <li key={fact.id}>{fact.fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
