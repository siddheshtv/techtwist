const fs = require("fs");

const matList = Array.from({ length: 21 }, (_, i) => i);

const generateCoordinates = () => {
  const coordinates = [];

  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
      const x = i.toString().padStart(2, "0");
      const y = j.toString().padStart(2, "0");
      coordinates.push(`${x}${y}: ""`);
    }
  }

  return coordinates;
};

const coordinates = generateCoordinates();
const output = coordinates.join("\n");

fs.writeFileSync("coordinates.txt", output, "utf-8");

console.log("Coordinates have been saved to coordinates.txt");
