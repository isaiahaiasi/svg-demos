import * as mnsvg from "./mnsvg.js";

export function drawGraph(svg, data) {
  const viewBox = getViewBox();
  // distance between the start of each bar
  const barStep = getBarStep();
  const barLengthScaleFactor = getScalingFactor();

  function drawAxes() {
    const { x1, y1, x2, y2 } = viewBox;

    const xAxis = mnsvg.create("line", { x1, y1, x2, y2: y1, class: "graph-axis" });
    const yAxis = mnsvg.create("line", { x1: x2, y1, x2, y2, class: "graph-axis" });

    // TODO: label axes

    svg.appendChild(xAxis);
    svg.appendChild(yAxis);
  }

  function drawBars() {
    const g = mnsvg.create("g", { class: "bar-group" });

    data.sort((a, b) => a.usage - b.usage ).forEach((dataPoint, i) => {
      // TODO: add label
      const bar = getBar(dataPoint, i);
      g.appendChild(bar);
    });

    svg.appendChild(g);
  }

  function getBar(dataPoint, i) {
    const barLength = dataPoint.usage * barLengthScaleFactor;
    return mnsvg.create("rect", {
      x: i * barStep + barStep / 3,
      y: 0,
      width: barStep * 2 / 3,
      height: barLength,
      rx: 1,
      "stroke-width": 0,
      class: "graph-bar",
      "data-origin": i * barStep + barStep / 2,
    });
  }

  function getViewBox() {
    const [ x1, y1, x2, y2 ] = mnsvg.getAttr(svg, "viewBox").split(" ");
    return { x1, y1, x2, y2 };
  }

  function getBarStep() {
    const range = viewBox.x2 - viewBox.x1;
    return range / data.length;
  }

  function getScalingFactor() {
    const verticalRange = viewBox.y2 - viewBox.y1;
    const maxVal = Math.max(...data.map(dp => dp.usage));
    return verticalRange / maxVal;
  }

  drawBars();
  drawAxes();
}
