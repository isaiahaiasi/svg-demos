import * as mnsvg from "./mnsvg.js";
import { drawGraph } from "./graph.js";
import SOData from "./data.js";

const svgContainer = document.querySelector("#svg-container");

const svg = mnsvg.create("svg", {
  "viewBox": "0 0 100 100",
  "stroke-width": 2,
});

drawGraph(svg, SOData);

svgContainer.appendChild(svg);
