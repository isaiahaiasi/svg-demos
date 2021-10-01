import * as mnsvg from "./mnsvg.js";
import { drawGraph } from "./graph.js";
import SOData from "./data.js";

const svgContainer = document.querySelector("#svg-container");

const svg = mnsvg.create("svg", {
  "viewBox": "0 0 100 50",
  "stroke-width": 2,
  class: "svg-graph",
});

drawGraph(svg, SOData);

svgContainer.appendChild(svg);
