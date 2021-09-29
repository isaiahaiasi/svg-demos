import * as mnsvg from "./mnsvg.js";

const svgContainer = document.querySelector("#svg-container");

const svgAttr = { "viewBox": "0 0 100 100", fill: "grey", stroke: "#000" };
const svg = mnsvg.create("svg", svgAttr);

const circleAttr = { cx: 50, cy: 50, r: 40, "stroke-width": 4 };
const circle = mnsvg.create("circle", circleAttr);

svg.appendChild(circle);
svgContainer.appendChild(svg);

