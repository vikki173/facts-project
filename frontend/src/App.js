import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/facts`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend responded with an error.");
        }
        return res.json();
      })
      .then((data) => {
        setFacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching facts:", err);
        setError("Unable to load facts. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1 className="title">Fun Facts ✨</h1>
          <p className="subtitle">
            A simple full-stack app (React + FastAPI) deployed on cloud.
          </p>
        </header>

        {loading && (
          <div className="grid">
            {[...Array(13)].map((_, i) => (
              <div key={i} className="card skeleton"></div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="errorBox">
            <h3>Oops!!</h3>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid">
            {facts.map((fact) => (
              <div className="card" key={fact.id}>
                <div className="factNumber">#{fact.id}</div>
                <p className="factText">{fact.fact}</p>
              </div>
            ))}
          </div>
        )}

        <footer className="footer">
          <p>
            Powered by <span>FastAPI</span> + <span>React</span> 🚀
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
