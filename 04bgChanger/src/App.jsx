

import { useState } from "react";

// ColorButton is a child component that receives props from App
function ColorButton({ name, value, onClick }) {
  return (
    <button
      className="px-4 py-2 rounded shadow text-white font-bold border-2"
      style={{ backgroundColor: value }}
      onClick={() => onClick(value)}
    >
      {name}
    </button>
  );
}

function App() {
  const [color, setColor] = useState("#FFD1DC");

  const colors = [
    { name: "Pink", value: "#FFD1DC" },
    { name: "Peach", value: "#FFDAB9" },
    { name: "Yellow", value: "#FFFACD" },
    { name: "Green", value: "#B5EAD7" },
    { name: "Blue", value: "#B5D0FF" },
    { name: "Purple", value: "#E0BBE4" },
    { name: "Mint", value: "#AAF0D1" },
    { name: "Lilac", value: "#C8A2C8" },
    { name: "Coral", value: "#FFB6B9" },
    { name: "Aqua", value: "#A2E4F4" }
  ];

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
        {colors.map((c) => (
          <ColorButton
            key={c.value}
            name={c.name}
            value={c.value}
            onClick={setColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App

