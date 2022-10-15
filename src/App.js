import { useEffect, useState } from "react";
import "./App.css";

const result = [];

function Output({ result }) {
  return (
    <div className="flexbox-container">
      {result.map((element, index) => {
        const { text: buttonText, colour: buttonColour } = element;
        return (
          <div key={index} className={`button-6 flexbox-item ${buttonColour}`}>
            <div>{buttonText}</div>
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [ready, setReady] = useState(null);

  // Data does't start loading
  // until *after* Parent is mounted
  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push({ text: "FizzBuzz", colour: "css-fizzbuzz" });
      } else if (i % 3 === 0) {
        result.push({ text: "Fizz", colour: "css-fizz" });
      } else if (i % 5 === 0) {
        result.push({ text: "Buzz", colour: "css-buzz" });
      } else {
        result.push({ text: String(i), colour: "" });
      }
    }
    setReady(true); // Indicate that it is ready to Display the Results
  }, []);

  // Solution:
  // don't render Child until `items` is ready!
  return <div>{ready && <Output result={result} />}</div>;
}

export default App;
