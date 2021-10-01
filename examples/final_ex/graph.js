import * as mnsvg from "./mnsvg.js";

export function drawGraph(svg, data) {
  drawBars(svg, data);
  drawAxes(svg);
}

function drawAxes(svg) {
  const { x1, y1, x2, y2 } = getViewBox(svg);

  const xAxis = mnsvg.create("line", { x1, y1, x2, y2: y1, class: "graph-axis" });
  const yAxis = mnsvg.create("line", { x1: x2, y1, x2, y2, class: "graph-axis" });

  // TODO: label axes

  svg.appendChild(xAxis);
  svg.appendChild(yAxis);
}

function drawBars(svg, data) {
  // distance between the start of each bar
  const step = getBarStep(data, svg);

  const barLengthScaleFactor = getScalingFactor(data, svg);
  const { y2: maxHeight} = getViewBox(svg);
  
  const g = mnsvg.create("g", { class: "bar-group" });

  // create bar svg elements & add to svg
  data.sort((a, b) => a.usage - b.usage ).forEach((dataPoint, i) => {
    const bar = getBar(dataPoint, { i, step, maxHeight, barLengthScaleFactor });

    // TODO: add label
    g.appendChild(bar);
  });

  svg.appendChild(g);
}

function getBar(dataPoint, { i, step, barLengthScaleFactor }) {
  const barLength = dataPoint.usage * barLengthScaleFactor;
  return mnsvg.create("rect", {
    x: i * step + step / 3,
    y: 0,
    width: step * 2 / 3,
    height: barLength,
    rx: 1,
    "stroke-width": 0,
    class: "graph-bar",
    "data-origin": i * step + step / 2,
  });
}

function getBarStep(data, svg) {
  const viewBox = getViewBox(svg);
  const range = viewBox.x2 - viewBox.x1;
  return range / data.length;
}

function getScalingFactor(data, svg) {
  const viewBox = getViewBox(svg);
  const verticalRange = viewBox.y2 - viewBox.y1;
  const maxVal = Math.max(...data.map(dp => dp.usage));
  return verticalRange / maxVal;
}

function getViewBox(svg) {
  const [ x1, y1, x2, y2 ] = mnsvg.getAttr(svg, "viewBox").split(" ");
  return { x1, y1, x2, y2 };
}
