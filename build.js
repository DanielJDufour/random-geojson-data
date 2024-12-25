const fs = require("fs");
const { randomPolygon } = require("@turf/random");

function randomFloatInRange(min, max) {
  const range = max - min;
  return min + Math.random() * range;
};

function randomIntegerInRange(min, max) {
  const range = max - min;
  return min + Math.round(Math.random() * range);
};

function getRandom(arr) {
  return arr[randomIntegerInRange(0, arr.length - 1)];
}

function clamp(n, min, max) {
  if (n < min) return min - 1;
  if (n > max) return max - 1;
  return n;
}

const bboxes = [
  [2.632580, -1.565350 ,10.542736, 2.081459],
  [-217.936032, -51.598873, -154.654782, -29.813902],
  [10.177903,36.131140,18.088060,39.021240],
  [-173.080211,13.733830,-141.439586,27.354492] // hawaii
];

const count = randomIntegerInRange(1, 2);
const bbox = getRandom(bboxes);
const [xmin, ymin, xmax, ymax] = bbox;
const bboxRadius = Math.min(Math.abs(xmax - xmin) / 2, Math.abs(ymax - ymin) / 2);
const max_radial_length = randomFloatInRange(bboxRadius / 100, bboxRadius);
const num_vertices = randomIntegerInRange(4, 20);

const options = {
  bbox,
  num_vertices,
  max_radial_length
};
const polygon = randomPolygon(count, options);

const args = Array.from(process.argv);
const filename = args[args.length - 1];
if (args.length < 3 || !filename) throw Error("missing filename");
fs.writeFileSync(filename, JSON.stringify(polygon, undefined, 2));