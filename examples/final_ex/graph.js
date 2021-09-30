import * as mnsvg from "./mnsvg.js";

export function drawGraph(svg, data) {
  drawBars(svg, data);
  drawAxes(svg);
}

function drawAxes(svg) {
  const { x1, y1, x2, y2 } = getViewBox(svg);

  const xAxis = mnsvg.create("line", { x1, y1: y2, x2, y2 });
  const yAxis = mnsvg.create("line", { x1, y1, x2: x1, y2 });

  // TODO: label axes

  svg.appendChild(xAxis);
  svg.appendChild(yAxis);
}

function drawBars(svg, data) {
  // distance between the start of each bar
  const step = getBarStep(data, svg);

  // scaling factor so highest val == highest point on chart
  const verticalScaleFactor = getScalingFactor(data, svg);
  const { y2: maxHeight} = getViewBox(svg);
  
  // create bar svg elements & add to svg
  data.sort((a, b) => a.usage - b.usage ).forEach((dataPoint, i) => {
    const barLength = dataPoint.usage * verticalScaleFactor;
    const bar = mnsvg.create("rect", {
      x: i * step + step / 3,
      y: maxHeight - barLength,
      rx: 1,
      width: step * 2 / 3,
      height: maxHeight - (maxHeight - barLength),
      "stroke-width": 0,
    });

    // TODO: add label

    svg.appendChild(bar);
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
